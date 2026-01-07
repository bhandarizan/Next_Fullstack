Title: Prisma dev diagnostic reports drift despite migrations applied

Summary

When running `npx prisma migrate dev` the dev diagnostic reports a drift:

[+] Added tables
  - User

But the `User` table is present in the database and matches `prisma/migrations/20251222154923_initial/migration.sql` exactly. The `_prisma_migrations` table contains the `20251222154923_initial` row with `applied_steps_count = 1` and checksum matching the migration file.

Environment

- OS: Linux (debian/derived)
- Node: (local environment)
- Prisma: CLI used from project
- Datasource: MySQL at mysql://nextuser:***@localhost:3306/nextjs_db

What I did

1. Verified migration SQL: `prisma/migrations/20251222154923_initial/migration.sql` creates `User`.
2. Inspected DB: `SHOW TABLES;` and `SHOW CREATE TABLE `User`;` — table exists and DDL matches migration SQL.
3. Queried `_prisma_migrations`: row exists for `20251222154923_initial` with matching checksum and `applied_steps_count = 1`.
4. Ran `npx prisma migrate deploy` — reports no pending migrations.
5. Ran `npx prisma migrate dev` and it still reports the dev-only diagnostic showing `User` as an added table.

Attached logs and files

- Prisma debug log: /tmp/prisma-debug.log
- DB state capture: /tmp/db-state.txt
- Migration SQL: prisma/migrations/20251222154923_initial/migration.sql
- Prisma schema: prisma/schema.prisma

Note

This looks like a dev-mode diagnostic false-positive. Please advise if there is any additional information you need to reproduce or investigate.
