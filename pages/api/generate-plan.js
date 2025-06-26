import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(req, res) {
  const { goal } = req.body

  if (!goal) return res.status(400).json({ error: 'Goal is required' })

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'Ты образовательный помощник.' },
        { role: 'user', content: `Составь персональный учебный план для цели: ${goal}` },
      ],
    })

    const plan = response.choices[0].message.content
    res.status(200).json({ plan })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Ошибка генерации' })
  }
}
