import { useState } from 'react'
import axios from 'axios'

export default function AiTutor() {
  const [goal, setGoal] = useState('')
  const [plan, setPlan] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await axios.post('/api/generate-plan', { goal })
      setPlan(response.data.plan)
    } catch (err) {
      alert('Ошибка при генерации плана')
    }
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center p-8 space-y-4">
      <h1 className="text-2xl font-bold">AI Tutor</h1>
      <input
        className="p-2 border rounded w-64"
        placeholder="Введите вашу цель"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Генерация...' : 'Сгенерировать путь'}
      </button>
      {plan && <pre className="bg-gray-100 p-4 rounded w-full max-w-xl whitespace-pre-wrap">{plan}</pre>}
    </div>
  )
}
