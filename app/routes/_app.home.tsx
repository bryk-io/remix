import { ToasNotifications } from '~/views/app/sample_notifications';
import { CommandBar } from '~/views/app/sample_command';
import { SimpleModal } from '~/views/app/sample_modal';
import { AnimatedModal } from '~/views/app/sample_animated_modal';
import { DatePicker } from '~/views/app/date_picker';

export default function Index() {
  return (
    <div className="grid justify-items-center gap-6">
      <ToasNotifications />
      <SimpleModal />
      <DatePicker />
      <AnimatedModal />
      <CommandBar />
    </div>
  );
}
