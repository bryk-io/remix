import React from 'react';
import { cn } from '~/lib/utils';
import { notify, type NotificationStyle } from '~/lib/notifications';
import { Button } from '~/components/ui/button';
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
} from '~/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

const notifications = [
  {
    value: 'message',
    label: 'Message',
  },
  {
    value: 'info',
    label: 'Info',
  },
  {
    value: 'success',
    label: 'Success',
  },
  {
    value: 'warning',
    label: 'Warning',
  },
  {
    value: 'error',
    label: 'Error',
  },
  {
    value: 'action',
    label: 'Action',
  },
  {
    value: 'promise',
    label: 'Promise',
  },
];

export default function Index() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  function onSelect(newValue: string): void {
    notify({
      message: 'Show notification of style: ' + newValue,
      description: 'This is a description providing more context about the action.',
      useColors: true,
      dismissible: true,
      style: newValue as NotificationStyle,
      task: {
        promise: new Promise((resolve) =>
          setTimeout(() => resolve({ name: 'just a test' }), 2000)
        ),
        success: (data: { name: string }) => {
          return `'${data.name}' operation is completed`;
        },
      },
      onClick: () => {
        alert('click on the notification...');
      },
    });
    setValue(newValue === value ? '' : newValue);
    setOpen(false);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[230px] justify-between">
          {value
            ? notifications.find((n) => n.value === value)?.label
            : 'Select notification style...'}
          <CaretSortIcon className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[230px] p-0">
        <Command>
          <CommandInput placeholder="Filter styles..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {notifications.map((n) => (
                <CommandItem key={n.value} value={n.value} onSelect={onSelect}>
                  {n.label}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === n.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
