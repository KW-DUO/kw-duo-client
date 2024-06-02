import Link from 'next/link';

const TeamProjectGuidelines = () => {
  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        {/* 배너 */}
        <div className="bg-black h-[500px] flex justify-center items-center text-white">
          <div className="w-[1080px] h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold mb-4">개발 팀플 가이드라인</h1>
            <h2 className="text-2xl font-semibold mb-2">
              개발 팀프로젝트를 처음 시작하는 학생들에게 도움이 되는 가이드라인입니다.
            </h2>
          </div>
        </div>

        <section className="bg-white text-gray-800 w-[1080px] mx-auto py-16 px-4">
          <p className="mb-8 text-lg">
            개발 팀프로젝트를 처음 시작하는 학생들을 위해 프로젝트의 기초부터 차근차근 안내하는
            가이드라인을 제공합니다.
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold mb-4">1. 프로젝트 목표 설정</h3>
              <p className="mb-4">
                프로젝트의 최종 목표를 명확하게 정의하고 이를 통해 얻고자 하는 결과를 설정합니다.
                목표 설정은 프로젝트의 방향을 결정짓는 중요한 단계입니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link
                    href="https://www.mindtools.com/pages/article/smart-goals.htm"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      SMART Goals
                    </a>
                  </Link>
                  방법론: 구체적이고, 측정 가능하며, 달성 가능하고, 관련성 있으며, 시간 제한이 있는
                  목표를 설정하는 방법입니다.
                </li>
                <li>
                  <Link
                    href="https://www.atlassian.com/team-playbook/plays/goal-setting"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      Atlassian Goal Setting
                    </a>
                  </Link>
                  : Atlassian에서 제공하는 팀 목표 설정 가이드입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">2. 프로젝트 범위 정의</h3>
              <p className="mb-4">
                프로젝트의 범위를 구체적으로 설정하여 과도한 작업을 방지하고 효율적인 진행을
                돕습니다. 범위 설정 예시를 제공합니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link
                    href="https://www.pmi.org/learning/library/scope-statement-includes-9412"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      PMI: Writing a Project Scope Statement
                    </a>
                  </Link>
                  : 프로젝트 범위 문서를 작성하는 방법을 설명합니다.
                </li>
                <li>
                  <Link
                    href="https://www.projectmanager.com/training/project-scope-management"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      ProjectManager.com: Project Scope Management
                    </a>
                  </Link>
                  : 프로젝트 범위 관리에 대한 포괄적인 가이드입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">3. 기능명세서 작성</h3>
              <p className="mb-4">
                프로젝트의 기능을 명확하게 나열하고 각각의 기능에 대한 명세서를 작성하는 방법을
                안내합니다. 작성 예시도 함께 제공합니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link
                    href="https://www.jamasoftware.com/blog/how-to-write-a-software-requirements-specification-srs/"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      Jama Software: How to Write a Software Requirements Specification
                    </a>
                  </Link>
                  : 소프트웨어 요구사항 명세서를 작성하는 방법입니다.
                </li>
                <li>
                  <Link
                    href="https://www.geeksforgeeks.org/how-to-write-a-good-software-design-document/"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      GeeksforGeeks: How to Write a Good Software Design Document
                    </a>
                  </Link>
                  : 좋은 소프트웨어 디자인 문서를 작성하는 팁입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">4. 플로우차트 작성</h3>
              <p className="mb-4">
                프로젝트의 전체 흐름을 시각적으로 표현하는 플로우차트를 작성하는 방법을 설명합니다.
                예시 플로우차트를 통해 이해를 돕습니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link
                    href="https://www.lucidchart.com/pages/how-to-make-a-flowchart-in-powerpoint"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      Lucidchart: How to Make a Flowchart
                    </a>
                  </Link>
                  : 플로우차트를 만드는 방법입니다.
                </li>
                <li>
                  <Link href="https://www.smartdraw.com/flowchart/" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      SmartDraw: Flowchart Software
                    </a>
                  </Link>
                  : 플로우차트를 그릴 수 있는 도구와 가이드입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">5. 일정 계획 및 마일스톤 설정</h3>
              <p className="mb-4">
                프로젝트의 전체 일정을 계획하고 주요 마일스톤을 설정하는 방법을 안내합니다. 예시와
                함께 단계별 계획 수립 방법을 설명합니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link
                    href="https://asana.com/guide/examples/project-management/project-plan"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      Asana: Project Planning
                    </a>
                  </Link>
                  : 프로젝트 계획 가이드입니다.
                </li>
                <li>
                  <Link
                    href="https://www.wrike.com/project-management-guide/faq/what-is-a-milestone-in-project-management/"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      Wrike: What is a Milestone in Project Management
                    </a>
                  </Link>
                  : 마일스톤 설정 가이드입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">6. 역할 및 책임 할당</h3>
              <p className="mb-4">
                팀원들에게 역할과 책임을 명확하게 할당하여 효율적인 협업을 촉진합니다. 역할 분담
                예시와 함께 할당 방법을 설명합니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link
                    href="https://www.projectmanager.com/blog/project-management-team-roles"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      ProjectManager.com: Project Management Team Roles and Responsibilities
                    </a>
                  </Link>
                  : 팀 역할과 책임을 할당하는 방법입니다.
                </li>
                <li>
                  <Link href="https://asana.com/resources/raci-chart" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      Asana: RACI Chart
                    </a>
                  </Link>
                  : RACI 차트를 사용하여 역할과 책임을 정의하는 방법입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">7. 협업 도구 사용</h3>
              <p className="mb-4">
                효율적인 협업을 위한 다양한 도구 (예: Slack, Trello, Jira 등)의 사용법을 안내합니다.
                각 도구의 장점과 사용 예시를 제공합니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link href="https://slack.com/resources/using-slack" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      Slack: Getting Started
                    </a>
                  </Link>
                  : Slack 사용법 가이드입니다.
                </li>
                <li>
                  <Link href="https://trello.com/en-US/guide" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      Trello: Getting Started Guide
                    </a>
                  </Link>
                  : Trello 시작 가이드입니다.
                </li>
                <li>
                  <Link href="https://www.atlassian.com/software/jira/guides" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      Jira: Getting Started
                    </a>
                  </Link>
                  : Jira 사용법 가이드입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">8. 주기적인 회의</h3>
              <p className="mb-4">
                정기적인 회의를 통해 프로젝트 진행 상황을 점검하고 문제를 해결하는 방법을
                안내합니다. 회의 진행 방법과 예시를 제공합니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link
                    href="https://www.atlassian.com/team-playbook/plays/health-monitor"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      Atlassian: Health Monitor
                    </a>
                  </Link>
                  : 팀 회의를 통한 건강 상태 모니터링 방법입니다.
                </li>
                <li>
                  <Link href="https://www.hubspot.com/marketing-statistics" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      HubSpot: How to Run a Meeting
                    </a>
                  </Link>
                  : 회의 진행 방법에 대한 가이드입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">9. Git 사용법</h3>
              <p className="mb-4">
                버전 관리를 위한 Git 사용법을 자세히 설명합니다. 기본적인 명령어와 함께 실제 사용
                예시를 통해 이해를 돕습니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link href="https://git-scm.com/doc" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      Git Documentation
                    </a>
                  </Link>
                  : Git 공식 문서입니다.
                </li>
                <li>
                  <Link href="https://www.atlassian.com/git/tutorials" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      Atlassian Git Tutorials
                    </a>
                  </Link>
                  : Git 튜토리얼과 가이드입니다.
                </li>
              </ul>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default TeamProjectGuidelines;
