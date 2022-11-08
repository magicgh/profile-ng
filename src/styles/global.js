import tw from 'twin.macro';

export const background = tw.div`flex flex-col h-full w-full items-center bg-slate-100 dark:bg-slate-800`;
export const wrapper = tw.div`flex flex-col`;

export const bio = tw.section`flex flex-col my-12`;

export const name = tw.div`flex flex-row space-x-8 pb-4 justify-center`;
name.formal = tw.div`text-3xl dark:text-neutral-100`;
name.alter = tw.div`text-3xl dark:text-neutral-100`;

export const section = tw.section`flex flex-col pb-12 justify-center`;
section.heading = tw.h1`text-2xl font-bold mb-2 dark:text-neutral-100`;
section.description = tw.div`prose prose-neutral max-w-2xl dark:prose-invert prose-a:text-blue-600`;
section.block = tw.div`prose max-w-2xl dark:prose-invert prose-sm prose-a:text-blue-600`;

export const icons = tw.div`flex flex-row mt-6 space-x-8 text-2xl justify-center`;
export const icon = tw.a`hover:text-green-500 dark:text-neutral-100 dark:hover:text-green-400`;

export const footer = tw.footer`flex flex-row py-4 justify-between`;
footer.text = tw.div`text-sm dark:text-neutral-100`;
footer.link = tw.a`hover:text-green-500`;



    