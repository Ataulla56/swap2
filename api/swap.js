
// api/swap.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { fromToken, toToken, amount } = req.body;

    // You can add actual swap logic here or call another service
    console.log("Swap requested:", { fromToken, toToken, amount });

    res.status(200).json({ message: 'Swap successful', data: { fromToken, toToken, amount } });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
