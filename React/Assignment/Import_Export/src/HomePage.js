// Complete the HomePage Component and export it
import {Form} from './Form'
export const name = "Aman";
export const email = "aman@gmail.com"

export function HomePage() {
  return (
    <div className="Homepage">
      {/* Create a h1 tag and render Form Component here */}
      <h1>HomePage</h1>
      <Form />
    </div>
  );
}
