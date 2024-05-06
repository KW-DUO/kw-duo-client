import ApplicationCard from './ApplicationCard';

export const ApplicantList = () => {
  return (
    <section>
      <div className="text-2xl font-bold mb-5">지원자 목록</div>
      <ul className="grid grid-cols-3 gap-5">
        <ApplicationCard />
      </ul>
    </section>
  );
};
