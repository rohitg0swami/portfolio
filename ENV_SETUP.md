# Environment Variables Setup

## Web3Forms Configuration

To properly configure the contact form, you need to set up environment variables:

1. Create a `.env.local` file in the root directory
2. Add your Web3Forms access key:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

3. Get your access key from [Web3Forms](https://web3forms.com/)

## Why Use Environment Variables?

- Security: API keys shouldn't be hardcoded in source code
- Flexibility: Different keys for different environments (development, production)
- Best Practice: Follows security standards for API key management
