import React from 'react'

export default function VoiceButton(){
  async function speak(){
    alert('Voice API not configured. To enable voice, set SPEECH_API_KEY in your deployment and implement /api/voice-stt server endpoint.')
  }

  return (
    <button onClick={speak} className="btn btn-secondary">🎤 Speak to KisanLink AI</button>
  )
}
