// backend/jest.setup.cjs
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = process.env.JWT_SECRET || 'testsecret';
process.env.OPENAI_API_KEY = process.env.OPENAI_API_KEY || 'test-key';
process.env.STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || 'sk_test_xxx';
process.env.MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ai_finance_test';
