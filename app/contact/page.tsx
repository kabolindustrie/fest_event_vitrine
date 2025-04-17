import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto p-6 my-[200px] border-amber-600 border-2 shadow-xl rounded-2xl">
      <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>

      <form
        action= "https://formspree.io/f/mrbpwgyg"
        method="POST"
        className="flex flex-col gap-4"
      >
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
            Nom
          </label>
          <Input id="nom" name="nom" placeholder="Votre nom" required />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input type="email" id="email" name="email" placeholder="Votre adresse email" required />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <Textarea id="message" name="message" placeholder="Écrivez votre message ici..." rows={5} required />
        </div>

        <Button type="submit" className="w-fit">
          Envoyer
        </Button>
      </form>
    </main>
  );
}
