-- SKL Surveyors Contact Form Table Setup
-- This script creates the contact form table with proper indexing and constraints

-- Create the contact form submissions table
CREATE TABLE IF NOT EXISTS skl_contact_submissions (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    service VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'completed', 'archived')),
    ip_address INET,
    user_agent TEXT,
    referrer_url TEXT
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_skl_contact_submissions_created_at ON skl_contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_skl_contact_submissions_status ON skl_contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_skl_contact_submissions_email ON skl_contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_skl_contact_submissions_service ON skl_contact_submissions(service);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_skl_contact_submissions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at on row updates
DROP TRIGGER IF EXISTS trigger_update_skl_contact_submissions_updated_at ON skl_contact_submissions;
CREATE TRIGGER trigger_update_skl_contact_submissions_updated_at
    BEFORE UPDATE ON skl_contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_skl_contact_submissions_updated_at();

-- Add comments to the table and columns for documentation
COMMENT ON TABLE skl_contact_submissions IS 'Stores contact form submissions from the SKL Surveyors website';
COMMENT ON COLUMN skl_contact_submissions.id IS 'Unique identifier for each contact submission';
COMMENT ON COLUMN skl_contact_submissions.name IS 'Full name of the person submitting the form';
COMMENT ON COLUMN skl_contact_submissions.email IS 'Email address of the person submitting the form';
COMMENT ON COLUMN skl_contact_submissions.phone IS 'Phone number of the person submitting the form';
COMMENT ON COLUMN skl_contact_submissions.service IS 'Type of service requested (roof-survey, rics-survey, etc.)';
COMMENT ON COLUMN skl_contact_submissions.message IS 'Detailed message from the person submitting the form';
COMMENT ON COLUMN skl_contact_submissions.created_at IS 'Timestamp when the form was submitted';
COMMENT ON COLUMN skl_contact_submissions.updated_at IS 'Timestamp when the record was last updated';
COMMENT ON COLUMN skl_contact_submissions.status IS 'Current status of the contact submission (new, in_progress, completed, archived)';
COMMENT ON COLUMN skl_contact_submissions.ip_address IS 'IP address of the person submitting the form';
COMMENT ON COLUMN skl_contact_submissions.user_agent IS 'User agent string from the browser';
COMMENT ON COLUMN skl_contact_submissions.referrer_url IS 'URL of the page that referred the user to the contact form';

-- Insert some sample data for testing (optional - remove in production)
-- INSERT INTO skl_contact_submissions (name, email, phone, service, message, status) VALUES
-- ('John Smith', 'john.smith@example.com', '07984 123 456', 'roof-survey', 'I need a roof survey for my property in London. The roof is showing signs of wear and I want to get it checked before winter.', 'new'),
-- ('Sarah Johnson', 'sarah.j@example.com', '07984 789 012', 'rics-survey', 'Looking for a comprehensive RICS survey for a property I am considering purchasing. Please provide a quote.', 'new'),
-- ('Mike Brown', 'mike.brown@example.com', '07984 345 678', 'building-survey', 'I have some structural concerns about my building and need a professional assessment.', 'in_progress');

-- Grant necessary permissions (adjust as needed for your setup)
-- GRANT SELECT, INSERT, UPDATE ON skl_contact_submissions TO your_app_user;
-- GRANT USAGE, SELECT ON SEQUENCE skl_contact_submissions_id_seq TO your_app_user;
