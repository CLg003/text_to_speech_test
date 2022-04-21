import { useSpeechSynthesis } from 'react-speech-kit';

const TextToSpeech = () => {

    const { speak } = useSpeechSynthesis();
    const text = "Hello";

    return (
        <div id="test-1">
            <h2>'react-speech-kit' - useSpeechSynthesis</h2>
            <button onClick={() => speak({ text: text })}>Hello</button>
        </div>
    );
};

export default TextToSpeech;