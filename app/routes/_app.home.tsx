import { ToasNotifications } from '~/views/app/sample_notifications';
import { CommandBar } from '~/views/app/sample_command';

export default function Index() {
  return (
    <div className="grid justify-center gap-6">
      <ToasNotifications />
      <CommandBar />
    </div>
  );
}
