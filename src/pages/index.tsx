import { Nav } from '../components/Nav/Nav';
import { Form } from '../components/Form/Form';
import { Pilares } from '../components/Pilares/Pilares';
import { Enterprise } from '../components/Enterprise/Enterprise';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Nav />
      <Form />
      <Pilares />
      <Enterprise />

      <Script
        type='text/javascript'
        src='https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js'
        strategy='beforeInteractive'
      />
      <Script
        type='text/javascript'
        src='/scripts/form.js'
        strategy='beforeInteractive'
      />
    </>
  );
}
