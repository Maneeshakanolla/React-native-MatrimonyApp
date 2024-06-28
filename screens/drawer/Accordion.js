import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AccordionItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleAccordion}>
        <Text>{title}</Text>
      </TouchableOpacity>
      {expanded && <Text>{content}</Text>}
    </View>
  );
};

const Accordion = () => {
  return (
    <View>
      <AccordionItem title="Item 1" content="Content for Item 1" />
      <AccordionItem title="Item 2" content="Content for Item 2" />
      <AccordionItem title="Item 3" content="Content for Item 3" />
    </View>
  );
};

export default Accordion;
