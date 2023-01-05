import React from "react";
import { Container } from "react-bootstrap";
import styles from "./TermsOfServices.module.scss";
import cn from "classnames";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const TermsOfServices = (): JSX.Element => {
  return (
    <Fade delay={900} duration={1200} fraction={0.1} triggerOnce>
      <section className={styles.document}>
        <Container className={styles.document__container}>
          <h1 className={cn(styles.document__title, "h2")}>
            terms of services
          </h1>
          <p className={cn(styles.document__desc, "body-2")}>
            The following terms and conditions govern all use of the Artem’s Art
            ("us", "we", or "our") website and all Services that we provide
            (collectively, the “Website”). By accessing or using any part of the
            Services, whether as a Visitor or a Client (collectively hereinafter
            - you), you agree to become bound by the Terms of Services
            (hereinafter - Terms).
          </p>
          <span className={cn(styles.document__accent, "body-2")}>
            IF ANY OF THESE TERMS OR ANY FUTURE CHANGES ARE UNACCEPTABLE TO YOU,
            DO NOT USE THIS WEBSITE.
          </span>
          <p className={cn(styles.document__desc, "body-2")}>
            Please also use the Glossary to understand the meaning of some of
            the terms.
          </p>
          <div className={styles["document__number-list"]}>
            <h2 className={styles["document__number-list__title"]}>
              1. CREATING AN ACCOUNT
            </h2>
            <ul className={styles["document__number-list__list"]}>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>1.1.</span> Client warrants that any data provided during
                the Account set up process is accurate and correct and that
                Client will update data if there are any changes.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>1.2.</span> The Client will receive edited photos after
                choosing from the gallery of unedited photos, according to the
                previously booked session terms.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                Upon the Client's request for additional edited photos not
                included in the booked session, Artem's Art can make them
                available in return of the relevant fee prepayment.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>1.3.</span> Please be aware that photos will be available
                in Account only during the 30 days period for which the gallery
                Account photos are live. After 30 days have passed since a photo
                was downloaded by Artem’s Art, it is automatically deleted.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>1.4.</span> The Client agrees not to share registration
                data with any other person or allow any third party to use login
                data. The Client will be solely responsible for the activity
                that occurs on the Client's Account (including ordered photos)
                so must keep the Account password secure.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                Client shall promptly notify us of any breach of security by
                email to the{" "}
                <a href="mailto:photography@artems.art">
                  photography@artems.art.
                </a>
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>1.5.</span> All contracts and transactions between Artem's
                Art and the Client whether made orally or in writing are subject
                to these Terms which shall be deemed to be incorporated into any
                contract between the Artem's Art and all or any of the Clients.
              </li>
            </ul>
          </div>
          <div className={styles["document__number-list"]}>
            <h2 className={styles["document__number-list__title"]}>
              2. PRICES AND PAYMENT TERMS
            </h2>
            <ul className={styles["document__number-list__list"]}>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>2.1.</span> Each type of the Service has its own cost
                according to the Website “Pricing” section.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                All prices are in US Dollars (USD) and the Client is responsible
                for any taxes or tariffs associated with the Client's purchase
                of a Service. Prices unless specified will not include
                applicable taxes.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                The prices indicated on the Website may change at any time
                without advance notice to you.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                If Client’s have purchased our Services, it will be charged at
                the price in force at the time a Client’s order is validated.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>2.2. Payment.</span> We offer Clients who want to purchase
                a Service from the Website the option to pay by card. Client
                will be automatically redirected to the PayPal service to
                securely log in and after that can choose to pay with a card or
                Paypal Account balance.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>
                  Please note that Artem's Art does not have access to any
                  Client's PayPal account data as the whole payment process is
                  being done within PayPal.
                </span>
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                For more information, please view the{" "}
                <a
                  target="_blank"
                  href="https://www.paypal.com/us/webapps/mpp/ua/useragreement-full"
                >
                  PayPal User Agreement
                </a>
                .
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                Where Client uses a payment card, Client warrants that has the
                necessary rights and authority to use that payment card.
              </li>
            </ul>
          </div>
          <div className={styles["document__number-list"]}>
            <h2 className={styles["document__number-list__title"]}>
              3. COPYRIGHT AND OWNERSHIP
            </h2>
            <ul className={styles["document__number-list__list"]}>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>3.1.</span> In accordance with the Copyright Law of the
                United States the copyright of all photos created by Artem's Art
                is always retained by Artem's Art throughout the world.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                All original negatives, transparencies and digital files created
                by Artem's Art remain the property of Artem's Art.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>3.2. Image Licensing.</span> All photos requested and
                purchased through Artem's Art are offered on an individual
                licence basis, for personal non-commercial purposes only and are
                non-exclusive.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                Artem's Art reserves the right to make reproductions of photos
                created during any and all assignments, commissions etc. terms
                for marketing, promotional, competition and editorial purposes.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                If the Client wishes to own the copyright of photos created by
                Artem's Art and by Artem’s Art preliminary consent, an
                additional fee will be paid by the Client to Artem's Art for
                transferring the copyright. The transfer of copyright will only
                become applicable after this payment has been made in full. The
                Client agrees to fully indemnify Artem's Art in respect of any
                claims or damages or any costs arising in respect of claims for
                copyright violation made by a third party.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>3.3. Usage Rights.</span> No commercial use, transfer to a
                third party (including secondary rights) or publication is
                permitted and may not be re-sold, rented or reassigned. Artem's
                Art reserves the right to charge an additional fee if the photos
                are used for non-individual purposes.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>3.4. Cropping and Image Manipulation.</span> The right to
                alter any photos rests with Artem’s Art, and the Client should
                seek Artem's Art opinion on any alteration request.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>3.5. Captions.</span> All photos must be reproduced with
                or in the spirit of an accompanying caption. If there is any
                doubt by the Client, then verification should be sought before
                publication.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>3.6. Artem's Art Website content.</span> Artem's Art uses
                reasonable efforts to ensure the accuracy, correctness and
                reliability of the content, but we make no representations or
                warranties as to the content's accuracy, correctness or
                reliability.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                We own solely and exclusively, all rights, all title and
                copyrights in and to the content provided on the Website, or are
                the sole users authorized to display this content within the
                Website.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                All title and intellectual property rights in and to the content
                provided on the Website is the property of Artem's Art, or is
                licensed and authorized for use solely for the purpose of
                display on the Website, and may be protected by the applicable
                copyright or other intellectual property laws and treaties and
                subject to use restrictions under such laws or treaties.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>3.7.</span> Under United States copyright law, all
                material contained on the Website (including all software, HTML
                code, other code) is protected by United States and foreign
                copyright laws. Except as otherwise expressly provided in these
                Terms, you may not copy, distribute, transmit, display, perform,
                reproduce, publish, license, modify, rewrite, create derivative
                works from, transfer, or sell any material contained on the
                Website without the prior consent of the copyright owner.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                None of the material contained on the Website may be
                reverse-engineered, disassembled, decompiled, transcribed,
                stored in a retrieval system, translated into any language or
                computer language, retransmitted in any form or by any means
                (electronic, mechanical, photo reproduction, recordation or
                otherwise), resold or redistributed without the prior written
                consent of the Artem’s Art. Violation of this provision may
                result in severe civil and criminal penalties.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>3.8. Trademarks.</span> The trademarks, logos, service
                marks, graphics and trade names (collectively, the “Trademarks”)
                displayed on the Website are registered and unregistered
                Trademarks of Artem's Art or other rights holders and may not be
                used in any manner that is likely to cause confusion, or that
                disparages or discredits Artem's Art or the applicable rights
                holder. You do not receive, by implication or otherwise, any
                right or license to use any Trademark displayed on the Website.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>
                  ANY USE OF THE WEBSITE NOT SPECIFICALLY PERMITTED UNDER THESE
                  TERMS IS STRICTLY PROHIBITED.
                </span>
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>
                  3.9. Submitting Content to the Website and social media.
                </span>{" "}
                We always appreciate interaction on our social media channels
                and feedback about our Website, Services, as it helps us to
                improve our Services. Through the use of this Website, you may
                be invited to submit a review, or interact with us via our
                social media channels.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                Where you do decide to submit such feedback or comments, you
                represent and warrant that:
                <ul
                  className={cn(styles["document__number-list__item__sublist"])}
                >
                  <li className={styles.document__desc}>
                    <span>a.</span> you are the sole author and owner of the
                    intellectual property and any other rights in that content
                    (or have the right to use that content with appropriate
                    consents and permissions);
                  </li>
                  <li className={styles.document__desc}>
                    <span>b.</span> give us permission to post or otherwise use
                    that feedback on our social media or other channels;
                  </li>
                  <li className={styles.document__desc}>
                    <span>c.</span> your comments or feedback correspond to Part
                    4 “Prohibited Acts” of these Terms.
                  </li>
                </ul>
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                We reserve the right to remove a review or comment if such
                review or comment breaches Part 4 of the Terms. If, at our
                request, you send certain specific submissions (for example
                contest entries) or without our request you send creative ideas,
                suggestions, proposals, plans, or other materials, whether
                online, by email, by postal mail, or otherwise (collectively,
                ‘comments’), you agree that we may, at any time, without
                restriction, edit, copy, publish, distribute, translate and
                otherwise use in any medium any comments that you forward to us.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                We are and shall be under no obligation (1) to maintain any
                comments in confidence; (2) to pay compensation for any
                comments; or (3) to respond to any comments.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                We take no responsibility and assume no liability for any
                comments posted by you or any third-party.
              </li>
            </ul>
          </div>
          <div className={styles["document__number-list"]}>
            <h2 className={styles["document__number-list__title"]}>
              4. PROHIBITED ACTS
            </h2>
            <ul className={styles["document__number-list__list"]}>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                In addition to other prohibitions as set forth in the Terms are
                prohibited from using the Website, its content or publishing
                data:
                <ul
                  className={cn(styles["document__number-list__item__sublist"])}
                >
                  <li className={styles.document__desc}>
                    <span>a.</span> for any unlawful purpose;
                  </li>
                  <li className={styles.document__desc}>
                    <span>b.</span> to solicit others to perform or participate
                    in any unlawful acts;
                  </li>
                  <li className={styles.document__desc}>
                    <span>c.</span> to violate any international, federal,
                    provincial or state regulations, rules, laws, or local
                    ordinances;
                  </li>
                  <li className={styles.document__desc}>
                    <span>d.</span> to infringe upon or violate our intellectual
                    property rights or the intellectual property rights of
                    others;
                  </li>
                  <li className={styles.document__desc}>
                    <span>e.</span> to harass, abuse, insult, harm, defame,
                    slander, disparage, intimidate, or discriminate based on
                    gender, sexual orientation, religion, ethnicity, race, age,
                    national origin, or disability;
                  </li>
                  <li className={styles.document__desc}>
                    <span>f.</span> to submit false or misleading data;
                  </li>
                  <li className={styles.document__desc}>
                    <span>g.</span> to upload or transmit viruses or any other
                    type of malicious code that will or may be used in any way
                    that will affect the functionality or operation of the
                    Service or of any related Website, other Websites, or the
                    Internet;
                  </li>
                  <li className={styles.document__desc}>
                    <span>h.</span> to collect or track the personal data of
                    others;
                  </li>
                  <li className={styles.document__desc}>
                    <span>i.</span> to spam, phish, pharm, pretext, spider,
                    crawl, or scrape;
                  </li>

                  <li className={styles.document__desc}>
                    <span>j.</span> for any obscene or immoral purpose;
                  </li>
                  <li className={styles.document__desc}>
                    <span>k.</span> to interfere with or circumvent the security
                    features of the Service or any related Website, other
                    Websites, or the Internet;
                  </li>
                  <li className={styles.document__desc}>
                    <span>l.</span> contains material that discloses personal
                    data;
                  </li>
                  <li className={styles.document__desc}>
                    <span>m.</span> is unrelated to the post or content to which
                    you have reviewed or commented on.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles["document__number-list"]}>
            <h2 className={styles["document__number-list__title"]}>
              5. THIRD PARTY SERVICES
            </h2>
            <ul className={styles["document__number-list__list"]}>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>5.1.</span> The Services are integrated with various third
                party services and applications (hereinafter “Third Party
                Services”). Examples of Third Party Services include social
                media platforms, Payment Processors PayPal (please refer to
                section 2 of the Terms).
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>5.2.</span> We are not liable for any harm or damages
                related to the purchase of Services, or any other transactions
                made in connection with any third-party websites. Please review
                carefully the third-party’s policies and practices and make sure
                you understand them before you engage in any transaction.
                Complaints, claims, concerns, or questions regarding third-party
                products should be directed to the third-party.
              </li>
            </ul>
          </div>
          <div className={styles["document__number-list"]}>
            <h2 className={styles["document__number-list__title"]}>6. TERM</h2>
            <ul className={styles["document__number-list__list"]}>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>6.1.</span> These Terms will remain effective until
                terminated by us.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                We may terminate, change, suspend or discontinue any aspect of
                the Website at any time.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>6.2.</span> We may restrict, suspend or terminate your
                access to the Website, cancel the Client Account at any time if
                in our sole judgment we believe you are in breach of our terms
                and conditions or applicable law, or where Client conduct
                impacts our reputation, or for any other reason without notice
                or liability.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                We maintain a policy that provides for the termination in
                appropriate circumstances of the Website use privileges of
                Visitors / Clients who are repeat infringers of intellectual
                property rights.
              </li>
            </ul>
          </div>
          <div className={styles["document__number-list"]}>
            <h2 className={styles["document__number-list__title"]}>
              7. DISCLAIMERS
            </h2>
            <ul className={styles["document__number-list__list"]}>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                UNLESS PROHIBITED BY LAW, THE WEBSITE AND THE CONTENT, ARE
                PROVIDED ON AN “AS IS, AS AVAILABLE” BASIS AND WE EXPRESSLY
                DISCLAIM ALL WARRANTIES, INCLUDING THE WARRANTIES OF
                MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE AND
                NON-INFRINGEMENT. UNLESS PROHIBITED BY LAW, WE DISCLAIM ALL
                RESPONSIBILITY FOR ANY LOSS, INJURY, CLAIM, LIABILITY, OR DAMAGE
                OF ANY KIND RESULTING FROM, ARISING OUT OF OR IN ANY WAY RELATED
                TO (A) ANY ERRORS IN OR OMISSIONS FROM THE WEBSITE OR THE
                CONTENT, INCLUDING, BUT NOT LIMITED TO, TECHNICAL INACCURACIES
                AND TYPOGRAPHICAL ERRORS, (B) THIRD PARTY COMMUNICATIONS, (C)
                ANY THIRD PARTY WEBSITES OR CONTENT DIRECTLY OR INDIRECTLY
                ACCESSED THROUGH LINKS ON THE WEBSITE, INCLUDING BUT NOT LIMITED
                TO ANY ERRORS IN OR OMISSIONS (D) THE UNAVAILABILITY OF THE
                WEBSITE OR THE CONTENT (E) YOUR USE OF THE WEBSITE OR THE
                CONTENT, (F) YOUR USE OF ANY EQUIPMENT OR SOFTWARE IN CONNECTION
                WITH THE WEBSITE OR THE CONTENT.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                You agree that from time to time we may remove the Website for
                indefinite periods of time or cancel the Website at any time,
                without notice to you.
              </li>
            </ul>
          </div>
          <div className={styles["document__number-list"]}>
            <h2 className={styles["document__number-list__title"]}>
              8. LIMITATION OF LIABILITY
            </h2>
            <ul className={styles["document__number-list__list"]}>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                IN NO CASE SHALL ARTEM’S ART, OUR DIRECTORS, OFFICERS,
                EMPLOYEES, AFFILIATES, AGENTS, CONTRACTORS, INTERNS, SUPPLIERS,
                SERVICE PROVIDERS OR LICENSORS BE LIABLE FOR ANY INJURY, LOSS,
                CLAIM, OR ANY DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL,
                OR CONSEQUENTIAL DAMAGES OF ANY KIND, INCLUDING, WITHOUT
                LIMITATION LOST PROFITS, LOST REVENUE, LOST SAVINGS, LOSS OF
                DATA, REPLACEMENT COSTS, OR ANY SIMILAR DAMAGES, WHETHER BASED
                IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR
                OTHERWISE, ARISING FROM YOUR USE OF ANY OF THE SERVICE OR ANY
                PRODUCTS PROCURED USING THE SERVICE, OR FOR ANY OTHER CLAIM
                RELATED IN ANY WAY TO YOUR USE OF THE SERVICE OR ANY PRODUCT,
                INCLUDING, BUT NOT LIMITED TO, ANY ERRORS OR OMISSIONS IN ANY
                CONTENT, OR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT
                OF THE USE OF THE SERVICE OR ANY CONTENT (OR PRODUCT) POSTED,
                TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICE, EVEN
                IF ADVISED OF THEIR POSSIBILITY AND TO THE EXTENT THE FOREGOING
                LIMITATION OF LIABILITY IS PROHIBITED OR FAILS OF ITS ESSENTIAL
                PURPOSE, THC’S SOLE OBLIGATION TO YOU FOR DAMAGES SHALL BE
                LIMITED TO $100.00.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                Because some states or jurisdictions do not allow the exclusion
                or the limitation of liability for consequential or incidental
                damages, in such states or jurisdictions, our liability shall be
                limited to the maximum extent permitted by law.
              </li>
            </ul>
          </div>
          <div className={styles["document__number-list"]}>
            <h2 className={styles["document__number-list__title"]}>
              9. INDEMNITY
            </h2>
            <ul className={styles["document__number-list__list"]}>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>9.1.</span> You will indemnify and hold Artem's Art
                harmless from any claim, demand, loss, liability, costs, or
                expenses (including reasonable attorney fees), arising out of
                your misuse of this Website, your breach of these Terms, or your
                violation of the law or any rights of a third party.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>9.2. Risk of loss.</span> The risk of loss and title for
                all photos purchased from this Website passes to you upon
                delivery of the edited photos to the Client Account.
              </li>
            </ul>
          </div>
          <div className={styles["document__number-list"]}>
            <h2 className={styles["document__number-list__title"]}>
              10. APPLICABLE LAW
            </h2>
            <ul className={styles["document__number-list__list"]}>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>10.1.</span> This Website is maintained through Artem's
                Art office located in Portland, Oregon. Accordingly, these Terms
                shall be deemed to have been made in the United States in the
                state of Oregon and shall be governed exclusively by the laws of
                the State of Oregon without regard to any principles of
                conflicts of law and you irrevocably and unconditionally submit
                to the exclusive jurisdiction of the state of Oregon.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>10.2. Miscellaneous.</span> The Terms constitute the
                entire agreement between Artem's Art and you concerning the
                subject matter hereof, and they may be modified by the posting
                by Artem's Art of a revised version. If any part of the
                Agreement is held invalid or unenforceable, that part will be
                construed to reflect the parties’ original intent, and the
                remaining portions will remain in full force and effect. A
                waiver by either party of any condition of the Terms or any
                breach thereof, in any one instance, will not waive such term or
                condition or any subsequent breach thereof. Artem's Art may
                assign its rights and obligations under the Terms without
                condition. You confirm that you prefer the Terms and any related
                documents be in English.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>10.3. Arbitration of Disputes.</span> Any dispute arising
                out of or relating in any way to your use of this Website or the
                purchase of Services from Artem's Art will be resolved by
                binding arbitration. The arbitration shall be conducted by a
                single arbitrator in the city of Portland, Oregon, USA, in
                accordance with the rules of the American Arbitration
                Association ("AAA"). No claims of any other parties may be
                joined or otherwise combined in the arbitration proceeding.
                Unless otherwise expressly required by applicable law, each
                party shall bear its own attorneys' fees without regard to which
                party is deemed the prevailing party in the arbitration
                proceeding. Subject to these Terms, the arbitrator shall be
                authorized to award either party any remedy permitted by
                applicable law. Alternatively, at Artem’s Art sole discretion, a
                claim may be adjudicated in the state of Oregon U.S. District
                Court.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                <span>10.4. Children's privacy protection.</span> This Website
                is not designed or intended for use by children under the age of
                18. By using the Website unsupervised, and/or registering for an
                account, you warrant that you are 18 years of age or older. If
                you are not 18, you should use the Services only with the
                involvement of a parent or guardian, or not at all. Pursuant to
                47 U.S.C. Section 230(d) as amended, Artem's Art hereby notifies
                you that parental control protections (such as computer
                hardware, software, or filtering Services) are commercially
                available that may assist you in limiting access to material
                that is harmful to minors. Information identifying current
                providers of such protections is available at the{" "}
                <a target="_blank" href="https://www.eff.org/">
                  Electronic Frontier Foundation
                </a>{" "}
                and{" "}
                <a target="_blank" href="https://netparents.org/">
                  America Links Up
                </a>
                .
              </li>
            </ul>
          </div>
          <div className={styles["document__number-list"]}>
            <h2 className={styles["document__number-list__title"]}>
              11. CONTACT INFORMATION
            </h2>
            <ul className={styles["document__number-list__list"]}>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                The Service is offered by Artem's Art, located at Portland,
                Oregon, USA.
              </li>
              <li
                className={cn(
                  styles["document__number-list__item"],
                  styles.document__desc
                )}
              >
                You can reach us by emailing us at{" "}
                <a href="mailto:photography@artems.art">
                  photography@artems.art.
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.document__glossary}>
            <h3 className={styles.document__glossary__title}>Glossary</h3>
            <ul className={styles.document__glossary__list}>
              <li className={styles.document__glossary__item}>
                All terms apply to all documents related to the Services
                provision, including our{" "}
                <Link href="/privacy-policy">
                  <a>Privacy Policy</a>
                </Link>
                .
              </li>
              <li className={styles.document__glossary__item}>
                <span>Visitor</span> - a person who visits the Website with or
                without any purpose automatically becomes a Visitor. A Visitor
                is a person who does not use the Services.
              </li>
              <li className={styles.document__glossary__item}>
                <span>Client</span> - a person who filled out the registration
                form and successfully registered on the Website to book the
                session.
              </li>
              <li className={styles.document__glossary__item}>
                <span>Services</span> - it’s paid photoshoot Services provided
                by Artem’s Art to Client under the previously booked session.
              </li>
              <li className={styles.document__glossary__item}>
                <span>Account</span> - created by the Client, an account within
                a Website in order to obtain the results of Services.
              </li>
              <li className={styles.document__glossary__item}>
                The meaning of any general language is not restricted by any
                accompanying example and the words ‘includes’, ‘including’,
                ‘such as’, ‘for example’ or similar words are not words of
                limitation.
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </Fade>
  );
};

export default TermsOfServices;
