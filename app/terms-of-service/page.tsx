"use client"
import SectionWrapper from "../components/ui/SectionWrapper";

export default function TermsOfService() {
  return (
    <SectionWrapper className="bg-stone-50">
      <div className="max-w-4xl mx-auto space-y-8 text-stone-700">
        <header className="space-y-4 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Terms of Service</h1>
          <p className="text-stone-500">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-stone-900">1. Terms</h2>
          <p>
            By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, 
            and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, 
            you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-stone-900">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on D Design Hub's website for personal, 
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on D Design Hub's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-stone-900">3. Disclaimer</h2>
          <p>
            The materials on D Design Hub's website are provided on an 'as is' basis. D Design Hub makes no warranties, expressed or implied, 
            and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, 
            fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-stone-900">4. Limitations</h2>
          <p>
            In no event shall D Design Hub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
            or due to business interruption) arising out of the use or inability to use the materials on D Design Hub's website, even if D Design Hub 
            or a D Design Hub authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-stone-900">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on D Design Hub's website could include technical, typographical, or photographic errors. 
            D Design Hub does not warrant that any of the materials on its website are accurate, complete or current. 
            D Design Hub may make changes to the materials contained on its website at any time without notice. 
            However D Design Hub does not make any commitment to update the materials.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-stone-900">6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the State of New York and you 
            irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-stone-900">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="font-medium text-stone-900">
            D Design Hub<br />
            Email: hello@ddesignhub.com<br />
            Address: 123 Design Avenue, Creative District, NY 10001
          </p>
        </section>
      </div>
    </SectionWrapper>
  );
}
