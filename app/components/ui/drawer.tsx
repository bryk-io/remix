import * as React from 'react';
import { cn } from '~/lib/utils';
import { cva } from 'class-variance-authority';
import { Drawer as DrawerPrimitive } from 'vaul';
import { type DialogProps } from 'vaul';

// define styles for the different drawer positions
const drawerVariants = cva('absolute z-50 flex h-auto flex-col border bg-background', {
  variants: {
    direction: {
      bottom: 'inset-x-0 bottom-0 mt-24 rounded-t-[10px]',
      right: 'inset-y-0 right-0 ml-24 rounded-l-[10px]',
      top: 'inset-x-0 top-0 mb-24 rounded-b-[10px]',
      left: 'inset-y-0 left-0 mr-24 rounded-r-[10px]',
    },
  },
  defaultVariants: {
    direction: 'bottom',
  },
});

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerContext = React.createContext<{
  title?: string;
  description?: string;
  direction?: 'right' | 'top' | 'bottom' | 'left';
}>({
  title: '',
  description: '',
  direction: 'bottom',
});

type DrawerProps = DialogProps & {
  title?: string;
  description?: string;
};

const DrawerWrapper = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-vaul-drawer-wrapper
      className={cn('relative flex min-h-screen flex-col bg-background', className)}>
      {children}
    </div>
  );
};
DrawerWrapper.displayName = 'DrawerWrapper';

const Drawer = ({
  shouldScaleBackground = true,
  direction = 'bottom',
  title = '',
  description = '',
  ...props
}: DrawerProps) => {
  return (
    <DrawerContext.Provider
      value={{
        title: title,
        description: description,
        direction: direction,
      }}>
      <DrawerPrimitive.Root
        // when opening the drawer on the sides we don't display the handle
        // and the drawer can't be dragged
        handleOnly
        shouldScaleBackground={shouldScaleBackground}
        direction={direction}
        {...props}
      />
    </DrawerContext.Provider>
  );
};
Drawer.displayName = 'Drawer';

const DrawerNested = (props: DrawerProps) => {
  const { direction } = React.useContext(DrawerContext);
  return <DrawerPrimitive.NestedRoot direction={direction} {...props} />;
};
Drawer.displayName = 'DrawerNested';

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { direction, title, description } = React.useContext(DrawerContext);

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(drawerVariants({ direction, className }))}
        {...props}>
        {direction == 'bottom' && (
          <DrawerPrimitive.Handle className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
          // <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"></div>
        )}
        <DrawerHeader>
          {title !== '' && <DrawerTitle>{title}</DrawerTitle>}
          {description !== '' && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        {children}
        {direction == 'top' && (
          <DrawerPrimitive.Handle className="mx-auto mb-4 h-2 w-[100px] rounded-full bg-muted" />
          // <div className="mx-auto mb-4 h-2 w-[100px] rounded-full bg-muted" />
        )}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = 'DrawerContent';

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
    {...props}
  />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-auto flex flex-col gap-2 p-4', className)} {...props} />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerNested,
  DrawerWrapper,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
