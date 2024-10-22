import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '~/lib/utils';
import { cva } from 'class-variance-authority';
import { type DialogProps } from 'vaul';

// define styles for
const drawerVariants = cva('fixed z-50 flex h-auto flex-col border bg-background', {
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

const DrawerContext = React.createContext<{
  direction?: 'right' | 'top' | 'bottom' | 'left';
}>({
  direction: 'bottom',
});

const Drawer = ({
  shouldScaleBackground = true,
  direction = 'bottom',
  ...props
}: DialogProps) => (
  <DrawerContext.Provider value={{ direction }}>
    <DrawerPrimitive.Root
      handleOnly
      shouldScaleBackground={shouldScaleBackground}
      direction={direction}
      {...props}
    />
  </DrawerContext.Provider>
);
Drawer.displayName = 'Drawer';

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerNested = DrawerPrimitive.NestedRoot;

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
  const { direction } = React.useContext(DrawerContext);

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
