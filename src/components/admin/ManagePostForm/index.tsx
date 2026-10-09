'use client';

import { makeParticialPublicPost, type PublicPost } from '@/src/dto/post/dto';
import { useActionState, useState } from "react";
import { Button } from "../../Button";
import { InputCheckbox } from "../../InputCheckbox";
import { InputText } from "../../InputText";
import { ImageUploader } from "../ImageUploader";
import { MarkdownEditor } from "../../MarkdownEditor";
import { createPostAction } from '@/src/actions/post/create-post-action';

type ManagePostFormProps = {
  publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
  
  const initialState = {
    formState: makeParticialPublicPost(publicPost),
    errors: [],
  }
  
  const [state, action, isPending] = useActionState(
    createPostAction, 
    initialState,
  );

  const {formState} = state;
  const [contentValue, setContentValue] = useState(publicPost?.content ?? '');
  
  return (
    <form action={action} className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText
          labelText='ID'
          name='id'
          placeholder='ID gerado automaticamente'
          type='text'
          defaultValue={formState.id}
          readOnly
        />

        <InputText
          labelText='Slug'
          name='slug'
          placeholder='Slug gerada automaticamente'
          type='text'
          value={formState.slug}
          readOnly
        />

        <InputText
          labelText='Autor'
          name='author'
          placeholder='Digite o nome do autor'
          type='text'
          defaultValue={formState.author}
        />

        <InputText
          labelText='Título'
          name='title'
          placeholder='Digite o título'
          type='text'
          defaultValue={formState.title}
        />

        <InputText
          labelText='Excerto'
          name='excerpt'
          placeholder='Digite o resumo'
          type='text'
          defaultValue={formState.excerpt}
        />

        <MarkdownEditor
          labelText='Conteúdo'
          value={contentValue}
          setValue={setContentValue}
          textAreaName='content'
          disabled={false}
        />

        <ImageUploader />

        <InputText
          labelText='URL da imagem de capa'
          name='coverImageUrl'
          placeholder='Digite a url da imagem'
          type='text'
          defaultValue={formState.coverImageUrl}
        />

        <InputCheckbox
          labelText='Publicar?'
          name='published'
          type='checkbox'
          defaultChecked={formState.published}
        />

        <div className='mt-4'>
          {state.errors.length > 0 && (
            <ul className='mb-4 list-inside list-disc text-red-700' role='alert'>
              {state.errors.map((error, index) => (
                <li key={`${index}-${error}`}>{error}</li>
              ))}
            </ul>
          )}
          <Button type='submit' disabled={isPending}>Enviar</Button>
        </div>
      </div>
    </form>
  );
}