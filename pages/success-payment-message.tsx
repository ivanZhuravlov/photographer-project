import { withDefaultLayout } from 'layouts/DefaultLayout/DefaultLayout';
import { SuccessPaymentMessage as SuccessPaymentMessageSection } from "page-components";
import React from 'react';

const withSupport = false;
const withBookSessionBtn = false;

const SuccessPaymentMessage = (): JSX.Element => {
    return (
        <SuccessPaymentMessageSection />
    );
};

export default withDefaultLayout(SuccessPaymentMessage, withSupport, withBookSessionBtn);
