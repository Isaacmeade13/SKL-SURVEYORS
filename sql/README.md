# SKL Surveyors Database Setup

This directory contains SQL scripts for setting up the SKL Surveyors database tables.

## Files

### `contact_form_setup.sql`
Creates the contact form submissions table with:
- Table: `skl_contact_submissions`
- Proper indexing for performance
- Automatic timestamp updates
- Status tracking (new, in_progress, completed, archived)
- Additional metadata (IP address, user agent, referrer)

### `contact_form_queries.sql`
Contains useful queries for:
- Viewing submissions
- Filtering by status or service type
- Managing submission lifecycle
- Exporting data

## Setup Instructions

1. **Run the setup script** in your Supabase SQL editor:
   ```sql
   -- Copy and paste the contents of contact_form_setup.sql
   ```

2. **Verify the table was created**:
   ```sql
   SELECT * FROM skl_contact_submissions LIMIT 1;
   ```

3. **Test the contact form** on your website to ensure submissions are being saved.

## Table Structure

The `skl_contact_submissions` table includes:

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `name` | VARCHAR(255) | Full name |
| `email` | VARCHAR(255) | Email address |
| `phone` | VARCHAR(50) | Phone number |
| `service` | VARCHAR(100) | Service type requested |
| `message` | TEXT | Detailed message |
| `created_at` | TIMESTAMP | When submitted |
| `updated_at` | TIMESTAMP | Last updated |
| `status` | VARCHAR(20) | Submission status |
| `ip_address` | INET | User's IP address |
| `user_agent` | TEXT | Browser info |
| `referrer_url` | TEXT | Referring page |

## Service Types

The contact form supports these service types:
- `roof-survey` - Roof Survey
- `rics-survey` - RICS Survey  
- `building-survey` - Building Survey
- `valuation` - Property Valuation
- `other` - Other services

## Status Values

- `new` - Newly submitted (default)
- `in_progress` - Being processed
- `completed` - Finished
- `archived` - Archived for long-term storage

## Security Notes

- The table uses the `skl_` prefix to avoid conflicts in shared databases
- IP addresses are stored for security and analytics
- User agents help identify spam submissions
- All fields are properly validated and constrained

## Maintenance

- Regularly update submission statuses
- Archive old completed submissions
- Monitor for spam submissions
- Export data periodically for backup
