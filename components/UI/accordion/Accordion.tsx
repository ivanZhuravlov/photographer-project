import { useState } from "react";
import AccordionItem from "./AccordionItem";
import styles from "./Accordion.module.scss";
import { AccordionProps, AccordionPropsItemText } from "./Accordion.props";
import { Col, Container, Row } from "react-bootstrap";
import cn from "classnames";

const Accordion = ({ faqs, className }: AccordionProps): JSX.Element => {
  const [clicked, setClicked] = useState<number>(NaN);

  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(NaN);
    }
    setClicked(index);
  };

  return (
    <section className={cn(styles.accordion, className)}>
      <Container>
        <Row>
          {faqs &&
            faqs.map((faq: AccordionPropsItemText, index: number) => (
              <Col xs={12} key={index}>
                <AccordionItem
                  onToggle={() => handleToggle(index)}
                  active={clicked === index}
                  faq={faq}
                  className={cn(
                    index + 1 === faqs.length &&
                      styles["accordion__item_last-child"]
                  )}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Accordion;
