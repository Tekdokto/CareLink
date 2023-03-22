import React from 'react';
import EmailListItem from './EmailListItem';

const DraftList = ({ drafts, selectedEmails, onSelectEmail, onDeselectEmail, onSelectAll, onDeselectAll, onDeleteSelected, onMarkSelectedAsRead, onMarkSelectedAsUnread, onToggleStarSelected }) => {
  return (
    <div>
      <div>
        <button onClick={onSelectAll}>Select All</button>
        <button onClick={onDeselectAll}>Deselect All</button>
        <button onClick={onDeleteSelected}>Delete</button>
        <button onClick={onMarkSelectedAsRead}>Mark as Read</button>
        <button onClick={onMarkSelectedAsUnread}>Mark as Unread</button>
        <button onClick={onToggleStarSelected}>Toggle Star</button>
      </div>
      <ul>
        {drafts.map((email) => (
          <EmailListItem
            key={email.id}
            email={email}
            isSelected={selectedEmails.includes(email.id)}
            onSelect={onSelectEmail}
            onDeselect={onDeselectEmail} onStarToggle={undefined}          />
        ))}
      </ul>
    </div>
  );
};

export default DraftList;
