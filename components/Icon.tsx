import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

export const Icon = (props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
    size: number
  }) => {
    return <FontAwesome style={{ marginTop: 2 }} {...props} />;
}
