import React from "react";
import { Container } from "react-bootstrap";
import styles from "./PrivacyPolicy.module.scss";
import cn from "classnames";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const PrivacyPolicy = (): JSX.Element => {
  return (
    <Fade delay={900} duration={1200} fraction={0.1} triggerOnce>
      <section className={styles.privacy}>
        <Container className={styles.privacy__container}>
          <h1 className={cn(styles.privacy__title, "h2")}>privacy policy</h1>
          <p className={cn(styles.privacy__desc, "body-2")}>
            Artem’s Art ("us", "we", or "our") operates the{" "}
            <Link href="/">
              <a>Artem’s Art website</a>
            </Link>
            (hereinafter the "Website"').
          </p>
          <p className={cn(styles.privacy__desc, "body-2")}>
            We want to simplify the understanding of this Privacy Policy and
            provide the opportunity to know what kind of personal data we
            collect, why and how we do it and what are the consequences of these
            actions.
          </p>
          <p className={cn(styles.privacy__desc, "body-2")}>
            This Privacy Policy is an integral part of our{" "}
            <Link href="/terms-of-services">
              <a>Terms of Services</a>
            </Link>{" "}
            .
          </p>
          <div className={styles["privacy__number-list"]}>
            <h2 className={styles["privacy__number-list__title"]}>
              1. DATA COLLECTION AND USE
            </h2>
            <ul className={styles["privacy__number-list__list"]}>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                Our primary purpose is to provide a safe, customized experience
                and high-quality Services.
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>1.1.</span> We may collect, store and use the following
                kinds of your personal data that are provided to us on an{" "}
                <span>entirely voluntary basis</span> in connection with the
                following:
                <ul
                  className={cn(styles["privacy__number-list__item__sublist"])}
                >
                  <li className={styles.privacy__desc}>
                    <span>a. Communication data.</span> Includes any
                    communication that you send to us through the contact form
                    on our Website, through email, social media messaging
                    (Facebook, Instagram), apps (WhatsApp, Telegram), social
                    media posting or by any other type of communication that are
                    available on the Website. Clients may receive email from us
                    relating to your photoshoot details, email notifications
                    relating to Services, etc. Our lawful ground for this
                    processing is our legitimate interests which in this case
                    are to reply to communications sent to us.
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>
                      b. Client data that includes data relating to any
                      purchases of Services.
                    </span>{" "}
                    As a part of a photoshoot Service, a Client needs to create
                    an Account to whom photos are delivered as part of the
                    Services contracted with Artem’s Art. To visit Artem's Art
                    Client Account, the Client will be required to enter
                    personal data (name, email address, password), data about
                    dealings with us and the detailed Services you may be
                    interested in. Our lawful ground - Service performance
                    between Client and us and/or Client request to get our
                    Services.
                  </li>
                </ul>
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>1.2. Data that is collected automatically.</span> To the
                extent that you access the Website, we will collect your data
                automatically, for example:
                <ul
                  className={cn(styles["privacy__number-list__item__sublist"])}
                >
                  <li className={styles.privacy__desc}>
                    <span>a.</span> We will collect your data automatically via
                    cookies, in line with the cookie settings on your browser.
                    For more data about cookies, and how we use them on the
                    Website, see the section below, headed “Cookies”.
                  </li>
                </ul>
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>1.3. Sensitive personal data</span> Please note that we
                don't collect any type of sensitive personal data. We ask that
                you don't send us and disclose any sensitive personal data
                (e.g., social security numbers, data related to racial or ethnic
                origin, political opinions, religion or other beliefs, health,
                biometrics or genetic characteristics, criminal background or
                trade union membership) on or through the Services or otherwise
                to us. Even if this data is provided, we will not store them
                anywhere on our side and will erase it immediately.
              </li>
            </ul>
          </div>
          <div className={styles["privacy__number-list"]}>
            <h2 className={styles["privacy__number-list__title"]}>
              2. COPYRIGHT
            </h2>
            <ul className={styles["privacy__number-list__list"]}>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>2.1.</span> By giving consent to Service terms Clients
                agree that photos might be used for marketing purposes under
                legitimate business interests, however this might not always be
                the case. Using photos for Artem's Art is necessary to show our
                work and to engage with future Clients.
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>2.2.</span> We may display any photos to promote Services
                on the Website, on social media, on blogs, on photography
                related websites, in advertising, brochures, magazine articles
                and other such material, providing that the photos used are used
                lawfully.
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                For more data about Copyright, please refer to{" "}
                <Link href="/terms-of-services">
                  <a>Terms of Services</a>
                </Link>
                .
              </li>
            </ul>
          </div>
          <div className={styles["privacy__number-list"]}>
            <h2 className={styles["privacy__number-list__title"]}>
              3. COOKIES
            </h2>
            <ul className={styles["privacy__number-list__list"]}>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>
                  3.1. We use cookies on the Website for the following purposes:
                </span>{" "}
                <ul
                  className={cn(styles["privacy__number-list__item__sublist"])}
                >
                  <li className={styles.privacy__desc}>
                    <span>
                      a. Authentication, Security and Other Functional Cookies.
                    </span>{" "}
                    Cookies help us to make the Website work, or work more
                    efficiently, verify the Client Account and determine when
                    you’re logged in, so we can make it easier for you to access
                    the Website and provide the appropriate experiences and
                    features.
                  </li>
                </ul>
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>3.2. Third Parties.</span> Third Party Services may use
                cookies to help you sign into their Services from our Services.
                Any such third party cookie usage is governed by the policy of
                the third party placing the cookie. The use of these cookies
                serves to safeguard our legitimate interests according to Art. 6
                Para. 1 S. 1 lit. f GDPR for the aforementioned purposes. To opt
                out of being tracked by Google Analytics across all Websites,
                visit{" "}
                <a
                  target="_blank"
                  href="http://tools.google.com/dlpage/gaoptout"
                >
                  http://tools.google.com/dlpage/gaoptout
                </a>
                . If you do not accept our cookies, you may experience some
                inconvenience in your use of our Websites.
              </li>
            </ul>
          </div>
          <div className={styles["privacy__number-list"]}>
            <h2 className={styles["privacy__number-list__title"]}>
              4. USE OF DATA
            </h2>
            <ul className={styles["privacy__number-list__list"]}>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>
                  4.1. Artem's Art uses the collected data for various purposes:
                </span>{" "}
                <ul
                  className={cn(styles["privacy__number-list__item__sublist"])}
                >
                  <li className={styles.privacy__desc}>
                    <span>a.</span> To provide and maintain our Service or in
                    order to take steps at the prior request of the
                    Visitor/Client to provide Services;
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>b.</span> To notify you about changes to our Services;
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>c.</span> To provide Client support;
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>d.</span> To detect, prevent and address technical
                    issues;
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>e.</span> For commercial and marketing communications.
                  </li>
                </ul>
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                We use the data we collect or receive from you to communicate
                directly with you.
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                We may send you emails containing newsletters, promotions and
                special offers. If you do not want to receive such email
                messages, you will be given the option to opt out or change your
                preferences.
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                We also use your data to send you Service-related emails (e.g.,
                Account verification, purchase and billing confirmations and
                reminders, changes/updates to features of the Service, technical
                and security notices). You may not opt out of Service-related
                emails.
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>
                  4.2. Legal Basis for processing personal data under the
                  General Data Protection Regulation (GDPR)
                </span>{" "}
                If you are from the European Economic Area (EEA), Artem's Art
                legal basis for collecting and using the personal data described
                in this Privacy Policy depends on the personal Data we collect
                and the specific context in which we collect it.
              </li>
              <li>
                Artem's Art may process your personal data because:
                <ul
                  className={cn(styles["privacy__number-list__item__sublist"])}
                >
                  <li className={styles.privacy__desc}>
                    <span>a.</span> We need to perform a contract with you;
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>b.</span> You have given us permission to do so;
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>c.</span> The processing is in our legitimate
                    interests and it is not overridden by your rights;
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>d.</span> We need to comply with the law.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles["privacy__number-list"]}>
            <h2 className={styles["privacy__number-list__title"]}>
              5. DATA TRANSFER AND SECURITY
            </h2>
            <ul className={styles["privacy__number-list__list"]}>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>5.1. Who we may share your data with.</span> We may share
                Сlients photos with a contractors (assistant or photo editor)
                for the purpose of providing the Service to you. Those
                third-party will be given limited access to your photos as is
                reasonably necessary to provide the Services, and we will
                require that such third parties comply with this Privacy Policy.
                It will only be used as detailed above, and will not be used for
                any other marketing purposes.
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>5.2. Security measures.</span> We have put in place
                appropriate security measures to prevent your personal data from
                being accidentally lost, used or accessed in an unauthorised
                way, altered or disclosed.
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>We are using cloud services tо store the photos.</span>{" "}
                Artem’s Art store Clients' photos in iCloud. iCloud secures your
                data by encrypting it when it's in transit, storing it in iCloud
                in an encrypted format, and using secure tokens for
                authentication. For more about iCloud security and privacy
                overview data please refer to{" "}
                <a
                  target="_blank"
                  href="https://support.apple.com/en-us/HT202303"
                >
                  iCloud security overview
                </a>
                . We may also use Dropbox as cloud storage, for more information
                please refer to{" "}
                <a target="_blank" href="https://www.dropbox.com/privacy">
                  Dropbox Privacy
                </a>
                .
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>5.3.</span>
                If you are located outside the USA and choose to provide data to
                us, please note that we transfer the data to the USA and process
                it there. Your consent to this Privacy Policy followed by your
                submission of such data represents your agreement to that
                transfer.
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>5.4.</span>
                While we take these steps to protect your personal data as much
                as we reasonably can, no system or transmission of data over the
                Internet or any other public network, or any storage of data,
                can be guaranteed to be 100% secure. If you are concerned about
                your data, please contact us.
              </li>
            </ul>
          </div>
          <div className={styles["privacy__number-list"]}>
            <h2 className={styles["privacy__number-list__title"]}>
              6. RETENTION OF DATA
            </h2>
            <ul className={styles["privacy__number-list__list"]}>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>6.1.</span> Artem's Art will retain your personal data
                only for as long as is necessary for the purposes set out in
                this Privacy Policy.
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>6.2.</span> We will retain and use your personal Data to
                the extent necessary to comply with our legal obligations (for
                example, if we are required to retain your data to comply with
                applicable laws), resolve disputes and enforce our legal
                agreements and policies or you have given your explicit consent
                to their further use or we have saved reserves the right to
                their further use permitted by law (photos protected by
                copyright, etc.)
              </li>
            </ul>
          </div>
          <div className={styles["privacy__number-list"]}>
            <h2 className={styles["privacy__number-list__title"]}>
              7. YOUR DATA PROTECTION RIGHTS UNDER THE GDPR
            </h2>
            <ul className={styles["privacy__number-list__list"]}>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                If you are a resident of the European Economic Area (EEA), you
                have certain data protection rights.
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>7.1.</span> You have the following data protection rights:
                <ul
                  className={cn(styles["privacy__number-list__item__sublist"])}
                >
                  <li className={styles.privacy__desc}>
                    <span>a. Access.</span> Ask if we are processing data and,
                    if we are, request access to your personal data. This
                    enables you to receive a copy of the personal data we hold
                    and certain other data about you.
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>b. Correction.</span> Request that any incomplete or
                    inaccurate personal data about you that we hold be
                    corrected.
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>c. Erasure.</span> Ask us to delete or remove your
                    personal data in certain circumstances. There are certain
                    exceptions where we may refuse a request for erasure, for
                    example, where the personal data is required for compliance
                    with law or in connection with legal claims.
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>d. Restriction.</span> Ask us to suspend the
                    processing of your personal data, for example, to establish
                    its accuracy or the reason for processing it.
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>e. Transfer.</span> Request the transfer of certain
                    personal data to another party.
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>f. Objection.</span> Challenge our processing of
                    personal data based on a legitimate interest (or those of a
                    third party) or for direct marketing purposes. However, we
                    may be entitled to continue processing data in certain
                    circumstances;
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>g. Automated decisions.</span> Contest any automated
                    decision made where it has a legal or similar significant
                    effect and ask for it to be reconsidered;
                  </li>
                  <li className={styles.privacy__desc}>
                    <span>h. Consent.</span> Where we are processing personal
                    data with consent, withdraw your consent.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles["privacy__number-list"]}>
            <h2 className={styles["privacy__number-list__title"]}>
              8. CHILDREN’S PRIVACY
            </h2>
            <ul className={styles["privacy__number-list__list"]}>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>8.1.</span> Our Service does not address anyone under the
                age of 18 ("Children").
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>8.2.</span> We do not knowingly collect personally
                identifiable data from anyone under the age of 18.
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                <span>8.3.</span> If we become aware that we have collected
                personal data from Children without verification of parental
                consent, we remove that data from our servers immediately.
              </li>
            </ul>
          </div>
          <div className={styles["privacy__number-list"]}>
            <h2 className={styles["privacy__number-list__title"]}>
              9. CHANGES TO PRIVACY POLICY
            </h2>
            <ul className={styles["privacy__number-list__list"]}>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                We may update our Privacy Policy from time to time.
              </li>
              <li
                className={cn(
                  styles["privacy__number-list__item"],
                  styles.privacy__desc
                )}
              >
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </li>
            </ul>
          </div>
          <div className={styles.privacy__contact}>
            <h3 className={styles.privacy__contact__title}>Contact Us</h3>
            <p className={styles.privacy__contact__desc}>
              If you have any questions about this Privacy Policy, or have
              questions about our practices please contact us:
            </p>
            <ul className={styles.privacy__contact__list}>
              <li className={styles.privacy__contact__item}>
                by email{" "}
                <a href="mailto:photography@artems.art">
                  photography@artems.art
                </a>
                ;
              </li>
              <li className={styles.privacy__contact__item}>
                by contact form on the Website.
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </Fade>
  );
};

export default PrivacyPolicy;
