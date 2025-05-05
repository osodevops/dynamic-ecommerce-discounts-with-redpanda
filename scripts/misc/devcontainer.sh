#!/usr/bin/env bash
set -eou pipefail
cd $(dirname $0)/../..

op=${1:-'exec-bash'}
case "${op:-}" in
up) devcontainer up --workspace-folder . ;;
exec-bash) devcontainer exec --workspace-folder . bash ;;
esac
