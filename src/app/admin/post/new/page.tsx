import { Button } from "@/src/components/Button";

export default async function adminPostNewPage() {
  return (
    <div className='py-16 flex gap-4 flex-wrap'>

      <Button variant='default' size="sm">
        Confirma
      </Button>

      <Button variant='ghost' size="sm">
        Confirma
      </Button>

      <Button variant='danger' size="sm">
        Confirma
      </Button>
    </div>);
}