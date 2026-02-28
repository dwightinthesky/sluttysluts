-- PostgreSQL schema draft for compliance-first marketplace MVP

create table if not exists users (
  id uuid primary key,
  role text not null check (role in ('buyer', 'seller', 'both', 'admin', 'ops')),
  email text not null unique,
  wallet_balance numeric(12,2) not null default 0,
  kyc_status text not null default 'pending' check (kyc_status in ('pending', 'approved', 'rejected', 'not_required')),
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists verification_cases (
  id uuid primary key,
  user_id uuid not null references users(id),
  type text not null check (type in ('age', 'kyc', 'kyb')),
  provider text not null,
  provider_case_id text not null,
  status text not null check (status in ('pending', 'approved', 'rejected')),
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists listings (
  id uuid primary key,
  seller_id uuid not null references users(id),
  title text not null,
  description text,
  price numeric(12,2) not null,
  currency char(3) not null,
  status text not null check (status in ('draft', 'pending_review', 'active', 'suspended', 'sold')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key,
  buyer_id uuid not null references users(id),
  seller_id uuid not null references users(id),
  listing_id uuid not null references listings(id),
  amount numeric(12,2) not null,
  base_price numeric(12,2) not null,
  buyer_fee numeric(12,2) not null,
  buyer_fee_rate numeric(6,4) not null,
  seller_commission numeric(12,2) not null,
  seller_commission_rate numeric(6,4) not null,
  total_charged numeric(12,2) not null,
  seller_earnings numeric(12,2) not null,
  reserve_held numeric(12,2) not null default 0,
  reserve_rate numeric(6,4) not null default 0,
  payoutable_amount numeric(12,2) not null,
  currency char(3) not null,
  status text not null check (
    status in ('pending', 'authorized', 'paid', 'held', 'delivered', 'released', 'refunded', 'cancelled', 'disputed')
  ),
  paid_at timestamptz,
  dispute_window_ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists promotions (
  id uuid primary key,
  seller_id uuid not null references users(id),
  listing_id uuid not null references listings(id),
  plan_id text not null,
  billing_model text not null check (billing_model in ('duration', 'clicks')),
  price numeric(12,2) not null,
  currency char(3) not null,
  priority_weight integer not null,
  click_quota integer,
  remaining_clicks integer,
  status text not null check (status in ('active', 'paused', 'expired', 'cancelled')),
  start_at timestamptz not null,
  end_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (
    (billing_model = 'duration' and click_quota is null and remaining_clicks is null)
    or
    (billing_model = 'clicks' and click_quota is not null and remaining_clicks is not null)
  )
);

create table if not exists payments (
  id uuid primary key,
  order_id uuid references orders(id),
  campaign_id uuid references promotions(id),
  checkout_session_id text,
  payment_kind text not null check (payment_kind in ('order', 'promotion')),
  psp text not null,
  psp_txn_id text,
  amount numeric(12,2) not null,
  currency char(3) not null,
  status text not null check (status in ('initiated', 'authorized', 'captured', 'failed', 'refunded', 'chargeback')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (
    (payment_kind = 'order' and order_id is not null and campaign_id is null)
    or
    (payment_kind = 'promotion' and campaign_id is not null and order_id is null)
  )
);

create table if not exists checkout_sessions (
  id uuid primary key,
  order_id uuid not null references orders(id),
  psp text not null,
  checkout_url text not null,
  expires_at timestamptz not null,
  status text not null check (status in ('open', 'completed', 'closed', 'expired')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists payment_webhook_events (
  id uuid primary key,
  event_id text not null unique,
  order_id uuid not null references orders(id),
  payment_status text not null check (payment_status in ('paid', 'failed', 'chargeback')),
  payload jsonb not null default '{}'::jsonb,
  received_at timestamptz not null default now()
);

create table if not exists payouts (
  id uuid primary key,
  seller_id uuid not null references users(id),
  order_id uuid not null references orders(id),
  gross_amount numeric(12,2) not null,
  platform_fee numeric(12,2) not null,
  net_amount numeric(12,2) not null,
  fee_rate numeric(6,4) not null,
  status text not null check (status in ('pending', 'queued', 'sent', 'failed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists wallet_ledger_entries (
  id uuid primary key,
  seller_id uuid not null references users(id),
  entry_type text not null check (entry_type in ('credit', 'debit')),
  source_type text not null check (source_type in ('payout', 'withdrawal', 'reserve', 'adjustment')),
  source_id text not null,
  amount numeric(12,2) not null,
  currency char(3) not null,
  status text not null check (status in ('pending', 'available', 'completed', 'reversed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists withdrawal_requests (
  id uuid primary key,
  seller_id uuid not null references users(id),
  amount numeric(12,2) not null,
  currency char(3) not null,
  payout_method text not null,
  note text,
  status text not null check (status in ('pending', 'sent', 'rejected', 'failed')),
  processed_by uuid references users(id),
  processed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists shipment_legs (
  id uuid primary key,
  order_id uuid not null references orders(id),
  carrier text not null,
  tracking_token text not null,
  status text not null check (status in ('label_created', 'in_transit', 'out_for_delivery', 'delivered', 'failed')),
  last_event_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists chat_threads (
  id uuid primary key,
  buyer_id uuid not null references users(id),
  seller_id uuid not null references users(id),
  order_id uuid references orders(id),
  listing_id uuid references listings(id),
  status text not null check (status in ('open', 'closed', 'blocked')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists chat_messages (
  id uuid primary key,
  thread_id uuid not null references chat_threads(id),
  sender_id uuid not null references users(id),
  text_body text,
  image_url text,
  status text not null check (status in ('visible', 'flagged', 'hidden')),
  created_at timestamptz not null default now(),
  check (text_body is not null or image_url is not null)
);

create table if not exists disputes (
  id uuid primary key,
  order_id uuid not null references orders(id),
  opened_by uuid not null references users(id),
  reason text not null,
  status text not null check (status in ('open', 'investigating', 'resolved_buyer', 'resolved_seller', 'closed')),
  resolution_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists moderation_events (
  id uuid primary key,
  entity_type text not null check (entity_type in ('listing', 'chat_message', 'profile')),
  entity_id text not null,
  provider text not null,
  risk_score numeric(5,2) not null,
  action text not null check (action in ('allow', 'review', 'block')),
  created_at timestamptz not null default now()
);

create table if not exists audit_events (
  id uuid primary key,
  actor_id uuid,
  actor_role text,
  event_type text not null,
  entity_type text not null,
  entity_id text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_orders_status on orders(status);
create index if not exists idx_orders_seller_status on orders(seller_id, status);
create index if not exists idx_payments_status on payments(status);
create index if not exists idx_checkout_sessions_order on checkout_sessions(order_id, status);
create index if not exists idx_payment_webhook_events_order on payment_webhook_events(order_id, received_at);
create index if not exists idx_verification_cases_user on verification_cases(user_id);
create index if not exists idx_promotions_listing_status on promotions(listing_id, status);
create index if not exists idx_wallet_entries_seller_currency on wallet_ledger_entries(seller_id, currency);
create index if not exists idx_withdrawals_seller_status on withdrawal_requests(seller_id, status);
create index if not exists idx_chat_threads_buyer on chat_threads(buyer_id);
create index if not exists idx_chat_threads_seller on chat_threads(seller_id);
create index if not exists idx_chat_messages_thread on chat_messages(thread_id, created_at);
create index if not exists idx_moderation_entity on moderation_events(entity_type, entity_id);
