export const formatDate = (date: Date | null | undefined): string => {
    if (!date || isNaN(date.getTime())) {
      return '';
    }
    const options = {
        year: '2-digit',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      } as const
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  