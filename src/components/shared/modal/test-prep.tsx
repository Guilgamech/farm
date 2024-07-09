"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ReactNode } from "react";

export function TestPrepModal({ children }: {
  children: ReactNode
}) {

  return <Dialog>
    <DialogTrigger asChild>
      {children}
    </DialogTrigger>
    <DialogContent className="w-full lg:rounded-md max-w-[100vw] h-[100dvh] lg:h-[600px] lg:max-w-[800px] flex flex-col items-start p-0 overflow-y-auto">
      <DialogHeader className="w-full pt-6 px-6">
        <DialogTitle className="pb-2 md:pb-3 border-b border-black text-xl md:text-2xl font-roboto text-start">Lab Tests</DialogTitle>

      </DialogHeader>
      <div className="pb-6 w-full h-full overflow-hidden pr-2">
        <div className="w-full h-full overflow-y-auto">
          <div className="pl-6 pr-4">
            <h2 className="text-primary mb-4 font-semibold text-2xl">Safety and Preparation Guidelines for Patients</h2>
            <blockquote className="relative mb-4 px-6 py-4 border-b border-t after:content-[''] after:absolute after:left-2 after:w-[5px] after:rounded-full after:bg-primary after:top-4 after:bottom-4">
              <h3 className="font-bold text-primary">Note</h3>
              <p>If patients fail to adhere to instructions, tests may be rescheduled. Always inform your doctor and testing center if you are or may be pregnant.</p>
            </blockquote>
            <p className="mb-4">Follow all instructions from your healthcare provider and the testing center. If you do not follow instructions, please inform your provider and/or testing center. Tell your provider about any medications, vitamins, or supplements you’re taking, as they might interfere with test results.</p>
            <p className="mb-4">A common preparation is fasting, which means not eating or drinking in the lead up to your test. Fasting lengths may vary by test type.</p>
            <p className="mb-4">Other common test preparations may include:</p>
            <ul className="list-disc pl-[30px] space-y-2 mb-4">
              <li>Not overeating the day before the test.</li>
              <li>Not smoking.</li>
              <li>Avoiding strenuous activity.</li>
              <li>Avoiding certain supplements or medications.</li>
              <li>Avoiding specific foods, drinks, meats, tea, or alcohol.</li>
            </ul>
            <p className="mb-6">If your provider’s instructions or test center instructions conflict with the instructions here, <b>always follow the instructions given to you by your provider/test center</b>. Contact your provider if you’re unsure about protocol.</p>
            <h2 className="pb-2 border-b mb-4 font-semibold text-xl">Safety and Preparation Guidelines</h2>
            <h2 className="pb-2 border-b mb-2 font-semibold text-xl text-primary">Blood</h2>
            <Accordion type="multiple" className="w-full mb-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Blood tests</AccordionTrigger>
                <AccordionContent className="p-4">
                  <p className="mb-2 text-lg"><b>Medicines/prescriptions/vitamins</b></p>
                  <p className="mb-4">Medicines, prescriptions, and vitamins may impact blood work. Talk to your provider about what medications/prescriptions/vitamins to avoid and whether it’s safe to do so.</p>

                  <p className="mb-2 text-lg"><b>Food</b></p>
                  <p className="mb-4">Food can influence hormones, blood sugar levels, and more. Talk to your provider about whether your blood work requires fasting.</p>

                  <p className="mb-2 text-lg"><b>Menstruation phases</b></p>
                  <p className="mb-4">Menstruation phases can be very important for some hormonal tests; consult your provider before tests to determine the best days for sampling levels of FSH, LH, prolactin, progesterone, estradiol, and androstenedione.</p>

                  <p className="mb-2 text-lg"><b>Time of day</b></p>
                  <p className="mb-4">Talk to your provider about the best time of day for your bloodwork. Blood for ACTH and cortisol, for example, should typically be taken in the morning from 8:00 to 8:30 AM. Generally, it’s best to take blood tests in the morning from 8:00 to 10:00 AM in the fasted state (between 8 and 14 hours of fasting). Water can be consumed as usual. Avoid overeating the day before your blood test.</p>

                  <p className="mb-2 text-lg"><b>Recommended</b></p>
                  <ul className="list-disc pl-[30px] space-y-2 mb-4">
                    <li><b>Do not</b> consume alcohol the day before your blood test.</li>
                    <li><b>Do not</b> smoke in the hour leading up to your blood test.</li>
                    <li>If possible, exclude physical and emotional stresses in the day leading up to your test.</li>
                    <li>Rest in a seated position for 10 to 20 minutes before your blood work.</li>
                    <li><b>Do not</b> conduct blood tests immediately after physiotherapeutic procedures, instrumental examinations, and other medical procedures. If possible, postpone laboratory analysis for several days after medical procedures.</li>
                    <li>If blood tests are being compared, try to schedule your tests for the same lab and same time of day, under similar conditions.</li>
                    <li>For certain blood tests, you may be asked to drink extra water so that there’s more fluid in your veins. Follow provider/test center instructions.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">Lipid panels</AccordionTrigger>
                <AccordionContent className="p-4">
                  <p className="mb-2 text-lg"><b>Recommended</b></p>
                  <ul className="list-disc pl-[30px] space-y-2 mb-4">
                    <li>Typically, fast for 8 to 12 hours for lipidic profile (cholesterol, HDL, LDL, triglycerides, apo A1, apo B, VLDL, lipoprotein A). Follow provider/test center instructions.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">Glucose tolerance test</AccordionTrigger>
                <AccordionContent className="p-4">
                  <p className="mb-2 text-lg"><b>Recommended</b></p>
                  <ul className="list-disc pl-[30px] space-y-2 mb-4">
                    <li>Typically, fast for 8 to 12 hours. Follow provider/test center instructions.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <h2 className="pb-2 border-b mb-2 font-semibold text-xl text-primary">Urine</h2>
            <ul className="list-disc pl-[30px] space-y-2 mb-4">
              <li><b>Do not</b> eat vegetables and fruits which may change the color of urine (for example, beets) or take diuretics the day before analysis.</li>
              <li><b>Do not</b> perform urine analysis during menstruation.</li>
              <li><b>Recommended:</b> You may be asked to drink water 15 to 20 minutes before certain urine tests; follow provider/test center instructions.</li>
              <li>Follow all laboratory directions regarding urine collection. If possible, bring the urine to the laboratory immediately following collection.</li>
            </ul>
            <h2 className="pb-2 border-b mb-2 font-semibold text-xl text-primary">Stool</h2>
            <ul className="list-disc pl-[30px] space-y-2 mb-4">
              <li>Stool should be collected before antimicrobial or chemical-therapeutic drugs are taken.</li>
              <li><b>Do not</b> take laxative drugs, castor oil, and rectal suppositories 3 to 4 days before analysis. Stool received after clyster and after barium intake (in case of X-ray examination) should not be used for analysis.</li>
              <li>Follow all provider/testing center directions regarding stool collection.</li>
            </ul>
            <h2 className="pb-2 border-b mb-2 font-semibold text-xl text-primary">Gastropanel</h2>
            <ul className="list-disc pl-[30px] space-y-2 mb-4">
              <li>Do fast in the hours leading up to the exam, following 8-12 hours of rest with no eating.</li>
              <li><b>Do not</b> smoke in the hour leading up to your blood test.</li>
              <li>Typically, patients may consume their normal medications, with the exception of medication which may affect the secretion of gastric juice (Ranitidine, Famotidine, Nizatidine, Pepcidin, Zantac, etc.) as well as proton pump inhibitors (Lansoprazole, Omeprazole, Pantoprazole, Esomeprazole, Rabeprazole, etc.). These medications should not be consumed within 1 week prior to the examination; consult with your doctor before making any changes to your medication. Talk to your doctor about all medications prior to taking this test.</li>
              <li><b>Do not</b> consume antacids or medications for mucous membrane protection within 1 day of examination.</li>
              <li>Patients might be given a protein drink, milk, or an egg as part of the examination. Follow all provider/testing center directions regarding the performance of this test.</li>
            </ul>
            <h2 className="pb-2 border-b mb-2 font-semibold text-xl text-primary">COVID-19 PCR test</h2>
            <ul className="list-disc pl-[30px] space-y-2 mb-4">
              <li><b>Do not</b> use nasal or throat drops or sprays before taking your swab.</li>
              <li><b>Do not</b> brush your teeth, rinse your mouth, drink or chew gum within 3 hours of the test (or for as long as directed by your testing center).</li>
              <li><b>Do not</b> drink, eat, smoke, or chew gum for at least 30 minutes before the test (or for as long as directed by your testing center).</li>
            </ul>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
}