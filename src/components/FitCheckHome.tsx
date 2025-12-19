import { useState } from 'react'
import MicrophoneIcon from './MicrophoneIcon'

const FitCheckHome = () => {
  const [isListening, setIsListening] = useState(false)

  const handleMicClick = () => {
    setIsListening(!isListening)
    // In a real app, this would trigger voice recording
    console.log(isListening ? 'Stopped listening' : 'Started listening')
  }

  return (
    <div className="w-full max-w-[402px] h-[874px] bg-black rounded-[20px] shadow-lg overflow-hidden relative">
      <div className="flex flex-col items-center justify-start h-full px-6 pt-20">
        {/* Status dots */}
        <div className="flex gap-3 mb-12">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        </div>

        {/* App title */}
        <h1 className="text-white text-4xl font-normal mb-4 text-center">
          fitcheck
        </h1>

        {/* Tagline */}
        <p className="text-gray-400 text-lg text-center mb-20">
          your best fit, every time
        </p>

        {/* Try saying section */}
        <div className="w-full mb-8">
          <p className="text-gray-400 text-base text-center mb-4">
            Try saying:
          </p>

          <div className="flex flex-col gap-4">
            <div className="text-gray-300 text-lg text-center">
              "Going to a dinner date"
            </div>
            <div className="text-gray-300 text-lg text-center">
              "Meeting friends for brunch"
            </div>
            <div className="text-gray-300 text-lg text-center">
              "Heading to work"
            </div>
          </div>
        </div>

        {/* Microphone button */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <button
            onClick={handleMicClick}
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
              isListening
                ? 'bg-red-500 scale-110'
                : 'bg-white hover:bg-gray-100'
            }`}
            aria-label="Tap to speak"
          >
            <MicrophoneIcon
              className={`w-10 h-10 ${isListening ? 'text-white' : 'text-black'}`}
            />
          </button>

          <p className="text-gray-400 text-sm mt-4">
            {isListening ? 'Listening...' : 'Tap to speak'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FitCheckHome
