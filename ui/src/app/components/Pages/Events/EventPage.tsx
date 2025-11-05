import { AppLayout } from '@app/components/Pages/AppLayout/AppLayout';
import { EventPageContent } from '@app/components/Pages/Events/EventPageContent';
import { useDocumentTitle } from '@app/utils/useDocumentTitle';
import * as React from 'react';

const EventPage: React.FunctionComponent = () => {
  useDocumentTitle('SBOMer | Event details');

  return (
    <AppLayout>
      <EventPageContent />
    </AppLayout>
  );
};

export { EventPage };
