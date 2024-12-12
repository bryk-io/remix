import { Button } from '~/components/ui/button';
import {
  Drawer,
  DrawerNested,
  DrawerFooter,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '~/components/ui/drawer';

export const SampleDrawer: React.FunctionComponent = () => {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-[640px]">
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime
            libero voluptas consequatur, voluptate adipisci eius molestiae quaerat
            necessitatibus quisquam laudantium quam labore repudiandae saepe deleniti.
            Alias, aut fuga. Perspiciatis.
          </p>
          <DrawerFooter>
            <DrawerNested>
              <DrawerTrigger asChild>
                <Button>Open Second Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-[640px]">
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                    maxime libero voluptas consequatur, voluptate adipisci eius molestiae
                    quaerat necessitatibus quisquam laudantium quam labore repudiandae
                    saepe deleniti. Alias, aut fuga. Perspiciatis.
                  </p>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </DrawerNested>

            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
