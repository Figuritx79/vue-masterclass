drop table if exists tasks;

create table 
  tasks (
    id uuid primary key not null,
    created_at timestamptz default now() not null,
    name text not null,
    status current_status default 'in-progress' not null,
    description text not null,
    due_date date default null,
    project_id uuid references projects (id) default null,
    collaborators text array default array[]::varchar[] not null
  );
