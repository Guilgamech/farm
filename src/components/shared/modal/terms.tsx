"use client"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ReactNode } from "react";

export function TermsModal({ children }: {
  children: ReactNode
}) {

  return <Dialog>
    <DialogTrigger asChild>
      {children}
    </DialogTrigger>
    <DialogContent className="w-full lg:rounded-md max-w-[100vw] h-[100dvh] lg:h-[600px] lg:max-w-[800px] flex flex-col items-start p-0 overflow-y-auto">
      <DialogHeader className="w-full pt-6 px-6">
        <DialogTitle className="pb-2 md:pb-3 border-b border-black text-xl md:text-2xl font-roboto text-start">MinuteMed Consumer Terms</DialogTitle>
      </DialogHeader>
      <div className="pb-6 w-full h-full overflow-hidden pr-2">
        <div className="w-full h-full overflow-y-auto">
          <div className="pl-6 pr-4">
            <p className="mb-2"><b>1.Incorporation.</b> These terms and conditions governing the MinuteMed program are incorporated into and deemed a part of the <a className="text-primary hover:underline" target="_blank" href="https://www.labfinder.com/terms-of-use/">Terms</a> you agree to when using the website and associated mobile app. You agree to these terms each time you use the MinuteMed service. References to “we”, “us” or the like herein refer to LabFinder as defined in such terms. </p>
            <p className="mb-2"><b>2.Emergency.</b> Do NOT use MinuteMed for emergencies. CALL 911 OR VISIT A HOSPITAL OR YOUR HEALTHCARE PROVIDER IN PERSON. </p>
            <p className="mb-2"><b>3.Third Party Healthcare Providers are NOT employed or engaged by LabFinder.</b> THE MINUTEMED SERVICE IS CONDUCTED BY THIRD PARTY PROFESSIONALS WHO UTILIZE OUR TECHNOLOGY TO COMMUNICATE WITH YOU. We are not responsible for the telehealth services rendered by such third parties. We are purely a technological platform facilitating the communication. </p>
            <p className="mb-2"><b>4.Doctor Oversight.</b> The nature of MinuteMed’s doctor oversight is subject to change prior to booking a given service, which may include, for example, evaluation of need (through a questionnaire or other communication methodology), orders or scripts (which may or may not be required by the clinical laboratory or radiology provider, health care payors and/or the government under the circumstances), messaging after receipt of results and other forms of communication as then-available. The term “doctor” refers to third party healthcare professionals authorized by law to provide such oversight and orders/scripts, and may include physicians, nurse practitioners and/or physician assistants. Note that payment is due even if you do not utilize all oversight services available and even if an order or script is not actually required. </p>
            <p className="mb-2"><b>5.Pricing; NO Refunds. ALL PRICING AND TERMS STATED AT THE TIME OF PAYMENT OR PROVISION OF CREDIT CARD INFORMATION ARE BINDING AND ENFORCEABLE. Payments are FINAL. No refunds are available from us.</b> YOU AGREE TO LOOK SOLELY TO THE THIRD-PARTY HEALTHCARE PROVIDER and NOT to LabFinder for any disputes regarding such oversight services and payment. You can contact us at <a className="text-primary hover:underline" href="mailto:hello@labfinder.com">hello@labfinder.com</a> if you have any issues to report. We do not provide any assurances as to whether any MInuteMed services are reimbursable by any health insurer, governmental benefit program or other payor. </p>
            <p className="mb-2"><b>6.Disclaimer of Warranties; Limitation of Liability.</b> YOUR USE OF THE MINUTEMED SERVICE IS AT YOUR OWN AND SOLE RISK, <b>AND YOU ARE SOLELY RESPONSIBLE FOR ENSURING YOU USE OUR TECHNOLOGICAL PLATFORM TO VIEW ANY TEST/IMAGING RESULTS AND MESSAGING.</b> We make no representations, warranties, assurances or guarantees governing the adequacy or quality of the oversight or the results of such oversight. YOU AGREE THAT WE ARE <b>NOT</b> RESPONSIBLE OR LIABLE FOR PROFESSIONAL SERVICES, ADVICE AND OUTCOMES RESULTING FROM YOUR CONSULTATION WITH THIRD PARTY HEALTHCARE PRACTITIONERS THROUGH OUR PLATFORM, EVEN IF RESULTING IN INJURY, DEATH OR OTHER DAMAGE. You agree to <b>look solely to</b> such third-party healthcare providers (and not to us) concerning any dispute regarding the nature, content, quality or performance of such third-party services. </p>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
}