import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <div
      className='App'
    >
      <SpeedInsights/>
      <Analytics/>
    </div>
  );
}

export default App;
