-- SKL Surveyors Contact Form Queries
-- Useful queries for managing contact form submissions

-- View all contact submissions (most recent first)
SELECT 
    id,
    name,
    email,
    phone,
    service,
    LEFT(message, 100) || '...' as message_preview,
    status,
    created_at,
    ip_address
FROM skl_contact_submissions 
ORDER BY created_at DESC;

-- View contact submissions by status
SELECT 
    status,
    COUNT(*) as count,
    MAX(created_at) as latest_submission
FROM skl_contact_submissions 
GROUP BY status
ORDER BY count DESC;

-- View contact submissions by service type
SELECT 
    service,
    COUNT(*) as count,
    MAX(created_at) as latest_submission
FROM skl_contact_submissions 
GROUP BY service
ORDER BY count DESC;

-- View submissions from the last 7 days
SELECT 
    id,
    name,
    email,
    service,
    status,
    created_at
FROM skl_contact_submissions 
WHERE created_at >= NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;

-- View submissions from the last 30 days
SELECT 
    DATE(created_at) as submission_date,
    COUNT(*) as daily_count
FROM skl_contact_submissions 
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY submission_date DESC;

-- Update submission status (example)
-- UPDATE skl_contact_submissions 
-- SET status = 'in_progress' 
-- WHERE id = 1;

-- Mark submission as completed (example)
-- UPDATE skl_contact_submissions 
-- SET status = 'completed' 
-- WHERE id = 1;

-- Archive old submissions (example - archive submissions older than 1 year)
-- UPDATE skl_contact_submissions 
-- SET status = 'archived' 
-- WHERE created_at < NOW() - INTERVAL '1 year' 
-- AND status != 'archived';

-- Delete old archived submissions (example - delete archived submissions older than 2 years)
-- DELETE FROM skl_contact_submissions 
-- WHERE status = 'archived' 
-- AND created_at < NOW() - INTERVAL '2 years';

-- Search submissions by name or email
-- SELECT * FROM skl_contact_submissions 
-- WHERE name ILIKE '%john%' OR email ILIKE '%john%'
-- ORDER BY created_at DESC;

-- View submission details by ID
-- SELECT * FROM skl_contact_submissions WHERE id = 1;

-- Export all submissions to CSV (run this in psql)
-- \copy (SELECT * FROM skl_contact_submissions ORDER BY created_at DESC) TO 'contact_submissions.csv' WITH CSV HEADER;
