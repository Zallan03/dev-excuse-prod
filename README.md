# dev-excuse-prod

One funny single-line excuse a developer gives when code breaks in production — an entry for [Make the AI Judge Laugh: Developer Excuses](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3) on [make.fun](https://make.fun).

[![make.fun bounty](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![make.fun rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/Zallan03/dev-excuse-prod/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![make.fun reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/Zallan03/dev-excuse-prod/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

## The entry

> The logs say it's fine. The logs are also the thing that's broken.

## How it works

`main.ts` (Node 22) writes the excuse to `/output/entry.txt` — one line, 66 characters, inside the 1–200 character gate — after self-checking the gate (length, single line, not only whitespace).

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

- Competition: [Make the AI Judge Laugh: Developer Excuses](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
- Reward: $3 split over the top 10 places
- Referral: [make.fun/r/tmbrnhrj](https://make.fun/r/tmbrnhrj)

## License

MIT — see [LICENSE](LICENSE).
