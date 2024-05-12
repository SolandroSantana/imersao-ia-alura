import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import ChatHeader from "@/components/chat-header";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import MarkdownPreview from '@uiw/react-markdown-preview';


const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

const formSchema = z.object({
  text: z.string()
})

function Chat() {

  const [getResponse, setGetResponse] = useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(values.text)
    const response = await result.response;
    const text = response.text();
    setGetResponse(text)
  }

  return (
    <>
      <div className="flex h-screen w-full flex-col bg-zinc-200 dark:bg-zinc-900">
        <ChatHeader />

        <main className="flex-1 overflow-auto px-6 py-4 border-b border-gray-500">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="Chatbot" src="/chatbot-logo.png" />
                <AvatarFallback>IA</AvatarFallback>
              </Avatar>
              <div className="max-w-[75%] rounded-lg bg-gray-300 p-3 text-sm dark:bg-gray-800">
                {getResponse}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="Chatbot" src="/chatbot-logo.png" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <div className="max-w-[75%] rounded-lg bg-gray-300 p-3 text-sm dark:bg-gray-800">
                <MarkdownPreview source={getResponse} />
              </div>
            </div>
          </div>
        </main>

        <footer className="flex items-center justify-between dark:bg-zinc-800 border-gray-200 px-6 py-5 dark:border-gray-800">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
              <div className='grid grid-cols-2 gap-10 w-full'>
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className='max-w-7xl' placeholder="Digite aqui o seu prompt" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className='w-1/2' type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </footer>
      </div>

    </>
  )
}

export default Chat
