import { useState } from 'react'
import { MESSAGE_TYPES, DEFAULT_VALUES, VALIDATION, CreateShapesMessage, CancelMessage } from '../common'
import './App.css'

export default function App() {
  const [count, setCount] = useState<number>(DEFAULT_VALUES.RECTANGLE_COUNT)
  const [color, setColor] = useState<string>(DEFAULT_VALUES.RECTANGLE_COLOR)

  const handleCreate = () => {
    const message: CreateShapesMessage = {
      type: MESSAGE_TYPES.CREATE_SHAPES,
      count,
      color
    }
    parent.postMessage({ pluginMessage: message }, '*')
  }

  const handleCancel = () => {
    const message: CancelMessage = {
      type: MESSAGE_TYPES.CANCEL
    }
    parent.postMessage({ pluginMessage: message }, '*')
  }

  return (
    <div className="font-sans p-6 w-full max-w-sm mx-auto">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">FigPlug: Rectangle Creator</h2>
      <div className="mb-4">
        <label htmlFor="count" className="block mb-1 text-xs font-medium text-gray-600">Count:</label>
        <input
          id="count"
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value, 10) || 0)}
          min={VALIDATION.MIN_COUNT}
          max={VALIDATION.MAX_COUNT}
          className="w-full p-2 border border-gray-300 rounded text-sm box-border focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="color" className="block mb-1 text-xs font-medium text-gray-600">Color:</label>
        <input
          id="color"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full h-10 p-2 border border-gray-300 rounded text-sm box-border cursor-pointer focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleCreate}
          className="flex-1 px-4 py-2 bg-blue-600 text-white border-none rounded text-sm font-medium cursor-pointer transition-colors hover:bg-blue-700"
        >
          Create {count} Rectangle{count !== 1 ? 's' : ''}
        </button>
        <button
          onClick={handleCancel}
          className="flex-1 px-4 py-2 bg-gray-100 text-gray-800 border-none rounded text-sm font-medium cursor-pointer transition-colors hover:bg-gray-200"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
