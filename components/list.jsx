import React, { useState } from 'react';
import { List } from 'react-native-paper';

const DropdownList = ({ title, items }) => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <List.Section title={title}>
      <List.Accordion
        title="Prenom"
        left={(props) => <List.Icon {...props} icon="account" />}
      >
        {items.map((item, index) => (
          <List.Item
            key={index}
            title={item.prenom}
            onPress={() => handleSelect(item.prenom)}
          />
        ))}
      </List.Accordion>
      {selectedItem && <List.Item title={`Selectionné: ${selectedItem}`} />}
    </List.Section>
  );
};

export default DropdownList;
