import Head from "next/head";
import TimePickerComponent from "./TimePickerComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Time Picker</title>
        <meta name="description" content="Next.js app with a time picker" />
      </Head>
      <main>
        <h1>Next.js Time Picker Example</h1>
        <TimePickerComponent />
      </main>
    </div>
  );
}
