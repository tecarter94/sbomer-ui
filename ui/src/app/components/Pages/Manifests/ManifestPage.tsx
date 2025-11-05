import { AppLayout } from '@app/components/Pages/AppLayout/AppLayout';
import { ManifestPageContent } from '@app/components/Pages/Manifests/ManifestPageContent';
import * as React from 'react';

export function ManifestPage() {
  return (
    <AppLayout>
      <ManifestPageContent />
    </AppLayout>
  );
}
