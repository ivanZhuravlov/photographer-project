import React from "react";
import styles from "./PageTitle.module.scss";
import { PageTitleProps } from "./PageTitle.props";
import cn from "classnames";
import { Col, Container, Row } from "react-bootstrap";

const PageTitle = ({
  title,
  desc,
  titleCol = 5,
  isDesc = true,
  hashtags,
  className,
}: PageTitleProps): JSX.Element => {
  return (
    <section className={cn(styles["page-title"])}>
      <Container>
        <Row className="align-items-end">
          <Col md={titleCol}>
            <h1 className={cn(styles["page-title__title"], "h2", className)}>
              {title}
            </h1>
          </Col>
          {isDesc ? (
            <Col md={{ span: 6, offset: 1 }} lg={{ span: 5, offset: 1 }}>
              <p className={cn(styles["page-title__desc"], "body-3")}>{desc}</p>
            </Col>
          ) : (
            <Col md={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
              <p className={cn(styles["page-title__tags"], "body-2")}>
                {hashtags &&
                  hashtags.map((el) => (
                    <a href={el.href} target="_blank" key={el.tag}>
                      {el.tag}
                    </a>
                  ))}
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default PageTitle;
