import * as React from 'react';

import ComponentExample from '../../../../components/ComponentDoc/ComponentExample';
import NonPublicSection from 'docs/src/components/ComponentDoc/NonPublicSection';

const Usage = () => (
  <NonPublicSection title="Visual tests">
    <ComponentExample examplePath="components/Toolbar/Visual/ToolbarExampleVariables" />
  </NonPublicSection>
);

export default Usage;
