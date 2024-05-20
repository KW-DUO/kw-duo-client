import { useForm } from 'react-hook-form';

type FormValues = {
  message: string;
};

export const InputField = ({ userId }: any) => {
  const { register, handleSubmit, reset, watch } = useForm<FormValues>();
  const message = watch('message');

  const onSubmit = (data: { message: string }) => {
    if (data.message.trim().length) {
      sendMessage(data.message);
      reset();
    }
  };

  const sendMessage = async (message: string) => {
    const postData = {
      memberId: userId,
      message: message,
    };

    console.log('#', message);

    // const response = await fetch(`${apiUrl}/chats/${roomId}/send`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(postData),
    // });

    // if (response.ok) {
    //   const newMessage = await response.json();
    //   setMessageList((prevMessages) => [...prevMessages, newMessage]);
    // }
  };

  return (
    <div className="w-full h-[144px] border p-5 bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register('message')}
          className="pl-3 pt-4 pr-4 pb-4 text-sm outline-none border w-full h-14 mb-3 rounded resize-none"
        />
        <button
          type="submit"
          className={`w-20 h-10 font-bold rounded float-right ${message && message.trim() ? 'bg-primary text-white' : 'bg-gray text-silver'}`}
        >
          전송
        </button>
      </form>
    </div>
  );
};
