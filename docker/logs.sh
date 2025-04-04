#!/usr/bin/env bash
set -eou pipefail
cd $(dirname $0)
source ./common.sh

set-services "$@"
show-services 'Showing logs for'
[ "${options:-}" ] || options="-f"

echo Press Ctrl+C to free your terminal ...

docker compose logs ${services:-} $options
