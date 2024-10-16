import { ToasNotifications } from '~/views/app/sample_notifications';
import { CommandBar } from '~/views/app/sample_command';
import { SimpleModal } from '~/views/app/sample_modal';
import { AnimatedModal } from '~/views/app/sample_animated_modal';

export default function Index() {
  return (
    <div className="grid justify-center gap-6">
      <ToasNotifications />
      <SimpleModal />
      <AnimatedModal />
      <CommandBar />
    </div>
  );
}
